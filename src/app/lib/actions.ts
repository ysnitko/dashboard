"use server"
import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";


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
  await prisma.users.create({ data: userData });
  revalidatePath("/");
}

export async function createProject(formData: FormData) {
  const name = formData.get("name") as string;
  const projectManagerName = formData.get("project-manager") as string;
  const dueDate = formData.get("due-date") as string;
  const progress = formData.get("progress") as string;
  const status = formData.get("status") as string;
  const createdAt = new Date().toISOString() as string;


  const projectData = {
    name: name,
    projectManager: [...projectManagerName],
    dueDate: dueDate,
    status: status,
    createdAt: createdAt,
    progress: progress,
  }
  await prisma.projects.create({ data: projectData });
  revalidatePath("/");
}


export async function deleteUser(id: number) {
  await prisma.users.delete({
    where: {
      id,
    }
  })
  revalidatePath("/");
}

export async function updateUser(id: number, formData: FormData) {
  const name = formData.get("name") as string;
  const login = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;
  const status = formData.get("status") as string;
  const createdAt = new Date().toISOString() as string;
  await prisma.users.update({
    where: {id,
    }, 
    data: {name, status, createdAt, role, login, password}
  })
  redirect("/users");
}