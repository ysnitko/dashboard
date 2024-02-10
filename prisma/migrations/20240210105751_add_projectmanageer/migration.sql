/*
  Warnings:

  - You are about to drop the column `managerId` on the `Projects` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Users_name_key";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectManagerId" INTEGER,
    "name" TEXT NOT NULL,
    CONSTRAINT "Projects_projectManagerId_fkey" FOREIGN KEY ("projectManagerId") REFERENCES "Users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Projects" ("id", "name") SELECT "id", "name" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
