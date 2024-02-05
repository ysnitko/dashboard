import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient()

prisma.users.findMany({
    include: {
        managedProjects: true
    }
})

console.log();

// model Projects {
//     id Int @id @default(autoincrement())
//     name String 
//     createdAt DateTime @default(now())
//     dueDate String
//     progress String
//     status String
//     projectManager Users? @relation(fields: [managerId], references: [id])
//     managerId Int @unique
//   }