/*
  Warnings:

  - You are about to drop the column `name` on the `Projects` table. All the data in the column will be lost.
  - Added the required column `title` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectManagerId" INTEGER,
    "title" TEXT NOT NULL,
    CONSTRAINT "Projects_projectManagerId_fkey" FOREIGN KEY ("projectManagerId") REFERENCES "Users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Projects" ("id", "projectManagerId") SELECT "id", "projectManagerId" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
