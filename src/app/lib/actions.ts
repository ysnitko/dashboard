"use server"
import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  const login = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;
  const status = formData.get("status") as string;
  const createdAt = new Date().toISOString() as string;

  const userData ={
    name: name,
    login: login,
    password: password,
    role: role,
    status: status,
    createdAt: createdAt,
  };
console.log(FormData);

  await prisma.users.create({ data: userData });
  revalidatePath("/");
}
