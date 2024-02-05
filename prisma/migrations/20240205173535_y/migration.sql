/*
  Warnings:

  - You are about to drop the `_ProjectsToUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_ProjectsToUsers_B_index";

-- DropIndex
DROP INDEX "_ProjectsToUsers_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ProjectsToUsers";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "managerId" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TEXT NOT NULL,
    "progress" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Projects_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Projects" ("createdAt", "dueDate", "id", "name", "progress", "status") SELECT "createdAt", "dueDate", "id", "name", "progress", "status" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
CREATE UNIQUE INDEX "Projects_managerId_key" ON "Projects"("managerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
