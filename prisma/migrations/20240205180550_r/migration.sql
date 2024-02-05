/*
  Warnings:

  - Added the required column `dueDate` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `progress` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "managerId" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TEXT NOT NULL,
    "progress" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Projects_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Projects" ("id", "managerId") SELECT "id", "managerId" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
CREATE UNIQUE INDEX "Projects_managerId_key" ON "Projects"("managerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
