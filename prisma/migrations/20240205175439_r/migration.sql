/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `dueDate` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `progress` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Projects` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "managerId" INTEGER NOT NULL,
    CONSTRAINT "Projects_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Projects" ("id", "managerId") SELECT "id", "managerId" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
CREATE UNIQUE INDEX "Projects_managerId_key" ON "Projects"("managerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
