/*
  Warnings:

  - You are about to drop the column `dueData` on the `Projects` table. All the data in the column will be lost.
  - Added the required column `dueDate` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TEXT NOT NULL,
    "progress" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_Projects" ("createdAt", "id", "name", "progress", "status") SELECT "createdAt", "id", "name", "progress", "status" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
