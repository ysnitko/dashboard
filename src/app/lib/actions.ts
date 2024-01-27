"use server"
import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";
import { Prisma} from "@prisma/client";

export  async function createUser(formData: FormData) { 
const users = await prisma.users.findMany()
const id = users.length + 1  as number
const  name = formData.get('name') as string;
const  login = formData.get('email') as string;
const  pswrd = formData.get('password') as string;
const  role = formData.get('role') as string;
const  status = formData.get('status') as string;
console.log(formData);

const userData: Prisma.UsersUncheckedCreateInput = {
    id: id,
    name: name,
    login: login,
    password: pswrd,
    role: role,
    status: status,
  };
  
await prisma.users.create({data: userData});
revalidatePath('/')
}