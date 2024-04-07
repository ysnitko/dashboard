'use server';
import { revalidatePath } from 'next/cache';
import { prisma } from './prisma';
import { Prisma } from '@prisma/client';
import { number } from 'zod';
import { use } from 'react';

export async function getData() {
  const data = await prisma.users.findMany();
  return data;
}

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const userPassword = formData.get('password') as string;
  const userStatus = formData.get('user-status') as string;
  const paymentStatus = formData.get('payment-status') as string;
  const amount = formData.get('amount') as string;
  const createdAt = new Date().toISOString() as string;

  const userData = {
    name: name,
    email: email,
    password: userPassword,
    userStatus: userStatus,
    paymentStatus: paymentStatus,
    amount: +amount,
    createdAt: createdAt,
  };
  const user = await prisma.users.create({ data: userData });

  await userCreateLog(user.id, 'create');
  revalidatePath('/');
}

export async function userCreateLog(id: number, action: string) {
  const user = await prisma.users.findFirst({
    where: {
      id: id,
    },
  });

  const logData = {
    date: new Date(),
    Users: {
      connect: {
        id: user?.id,
      },
    },
    userActivity:
      action === 'create'
        ? 'user created'
        : action === 'update'
        ? 'user updated'
        : action === 'activate'
        ? 'user activated'
        : action === 'block'
        ? 'user blocked'
        : action === 'login'
        ? 'user logged in'
        : action === 'sign out'
        ? 'user  is sign out'
        : '',

    details:
      action === 'create'
        ? `user ${user?.name} was created`
        : action === 'update'
        ? `user ${user?.name} was updated`
        : action === 'activate'
        ? `user ${user?.name} was activated`
        : action === 'block'
        ? `user ${user?.name} was blocked`
        : action === 'login'
        ? `user ${user?.name} logged in`
        : action === 'sign out'
        ? `user ${user?.name} is sign out`
        : '',
  };

  await prisma.subRows.create({
    data: logData,
  });
}

export async function userCreateGroupLogUpdate(
  usersId: number[],
  action: string
) {
  const logData = {
    date: new Date(),
    userActivity: action === 'update' ? 'user update' : '',
    details: '',
    Users: {
      connect: { id: usersId.find((user) => ({ id: user })) },
    },
  };

  await prisma.subRows.create({
    data: logData,
  });
}

export async function deleteUser(id: number) {
  const userId = await findUser(id);
  if (userId) {
    await clearLogs(userId.id);
  }

  const deleteUser = await prisma.users.delete({
    where: {
      id,
    },
  });

  revalidatePath('/');
}

export async function clearLogs(usersId: number) {
  await prisma.subRows.deleteMany({
    where: {
      usersId: { in: [usersId] },
    },
  });
}

export async function findUser(id: number | null) {
  if (id === null) {
    return null;
  }
  const user = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });
  return user;
}

export async function updateUser(id: number, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const userStatus = formData.get('user-status') as string;
  const paymentStatus = formData.get('payment-status') as string;
  const amount = Number(formData.get('amount'));
  const createdAt = new Date().toISOString() as string;
  const updatedUser = await prisma.users.update({
    where: { id },
    data: { name, email, userStatus, paymentStatus, amount, createdAt },
  });

  await userCreateLog(updatedUser.id, 'update');
  if (updatedUser.userStatus === 'Blocked') {
    await userCreateLog(updatedUser.id, 'block');
  } else if (updatedUser.userStatus === 'Active') {
    await userCreateLog(updatedUser.id, 'activate');
  }

  revalidatePath('/');
}

export async function updateSetUserPaid(usersId: number[]) {
  await prisma.users.updateMany({
    where: { id: { in: usersId } },
    data: { paymentStatus: 'Paid' },
  });

  await userCreateGroupLogUpdate(usersId, 'update');

  revalidatePath('/users-field');
}

export async function userActivate(id: number) {
  const user: {
    id: number;
    name: string | null;
    email: string | null;
    userStatus: string;
    createdAt: Date;
    paymentStatus: string;
    amount: number;
  } | null = await prisma.users.findUnique({
    where: { id },
  });

  if (user && user.userStatus === 'Active') {
    return false;
  }
  const activateUser = await prisma.users.update({
    where: { id, userStatus: 'Blocked' },
    data: {
      userStatus: 'Active',
    },
  });
  await userCreateLog(activateUser.id, 'activate');
  revalidatePath('/');
  return true;
}

export async function getUsers() {
  const users = await prisma.users.findMany();
  return users;
}

export async function getSubRowsData() {
  const subRows = await prisma.subRows.findMany();
  return subRows;
}
