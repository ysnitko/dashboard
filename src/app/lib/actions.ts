'use server';
import { revalidatePath } from 'next/cache';
import { prisma } from './prisma';
import { redirect } from 'next/navigation';

export async function getData() {
  const data = await prisma.users.findMany();
  return data;
}

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const userStatus = formData.get('user-status') as string;
  const paymentStatus = formData.get('payment-status') as string;
  const amount = formData.get('amount') as string;
  const createdAt = new Date().toISOString() as string;

  const userData = {
    name: name,
    email: email,
    userStatus: userStatus,
    paymentStatus: paymentStatus,
    amount: +amount,
    createdAt: createdAt,
  };
  await prisma.users.create({ data: userData });
}

// export async function createProject(formData: FormData) {
//   const title = formData.get('title') as string;
//   const projectManagerName = formData.get('project-manager') as string;
//   // const dueDate = formData.get("due-date") as string;
//   const progress = formData.get('progress') as string;
//   const status = formData.get('status') as string;
//   const createdAt = new Date().toISOString() as string;
//   const manager = await prisma.users.findFirst({
//     where: {
//       name: projectManagerName,
//     },
//   });

//   const projectData = {
//     title: title,
//     projectManager: {
//       connect: {
//         id: manager?.id,
//       },
//     },
//     progress: +progress,
//     status: status,
//     createdAt: createdAt,
//   };
//   // dueDate: dueDate,

//   await prisma.projects.create({ data: projectData });
//   redirect('/projects');
// }

export async function deleteUser(id: number) {
  await prisma.users.delete({
    where: {
      id,
    },
  });
  revalidatePath('/');
}

// export async function deleteProject(id: number) {
//   await prisma.projects.delete({
//     where: {
//       id,
//     },
//   });
//   redirect('/projects');
// }

export async function findUser(id: number | null) {
  if (id === null) {
    return null;
  }
  const managerName = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });
  console.log(managerName?.name);

  return managerName?.name;
}

// export async function updateUser(id: number, formData: FormData) {
//   const name = formData.get('name') as string;
//   const login = formData.get('email') as string;
//   const password = formData.get('password') as string;
//   const role = formData.get('role') as string;
//   const status = formData.get('status') as string;
//   const createdAt = new Date().toISOString() as string;
//   await prisma.users.update({
//     where: { id },
//     data: { name, status, createdAt, role, login, password },
//   });
//   redirect('/users');
// }

// export async function updateProject(id: number, formData: FormData) {
//   const title = formData.get('title') as string;
//   const projectManagerName = formData.get('project-manager') as string;
//   const progress = Number(formData.get('progress'));
//   const status = formData.get('status') as string;
//   const manager = await prisma.users.findFirst({
//     where: {
//       name: projectManagerName,
//     },
//   });

//   const projectData = {
//     title: title,
//     projectManager: {
//       connect: {
//         id: manager?.id,
//       },
//     },
//     progress: +progress,
//     status: status,
//   };

//   await prisma.projects.update({
//     where: { id },
//     data: projectData,
//   });
//   redirect('/projects');
// }

export async function getUsers() {
  const users = await prisma.users.findMany();
  return users;
}
