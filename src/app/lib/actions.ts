"use server"
import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";
import User from "../users/[id]/page";

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
  redirect("/users");
}

  export async function createProject(formData: FormData) {
    const title = formData.get("title") as string;
    const projectManagerName = formData.get("project-manager") as string;
    // const dueDate = formData.get("due-date") as string;
    const progress = formData.get("progress") as string;
    const status = formData.get("status") as string;
    const createdAt = new Date().toISOString() as string;
    const manager = await prisma.users.findFirst({
      where: {
        name: projectManagerName,
      }
    });
    
    console.log(manager);

    const projectData = {
      title: title,
      projectManager: { 
        connect: {
          id: manager?.id
        }
      },
      progress: +progress,
      status: status,
      createdAt: createdAt,
     
    };
      // dueDate: dueDate,
     
    await prisma.projects.create({ data: projectData });
    redirect("/projects");
  }
  

export async function deleteUser(id: number) {
  await prisma.users.delete({
    where: {
      id,
    }
  })
  revalidatePath("/");
}

export async function findUser(id: number | null) {
  if (id === null) {
    return null;
  }
 const managerName =  await prisma.users.findUnique({
    where: {
      id: id,
  }})
  return managerName?.name
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