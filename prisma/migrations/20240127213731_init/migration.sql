/*
  Warnings:

  - You are about to alter the column `createdAt` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "role" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_Users" ("createdAt", "id", "login", "name", "password", "role", "status") SELECT "createdAt", "id", "login", "name", "password", "role", "status" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;