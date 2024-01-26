"use server"
import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

export  async function createUser(formData: FormData) {
const  user = formData.get('user') as string;
await prisma.note.create({data: {user}})
revalidatePath('/')
}