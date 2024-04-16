-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "userStatus" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentStatus" TEXT NOT NULL,
    "duesDate" TEXT,
    "amount" INTEGER NOT NULL
);
INSERT INTO "new_Users" ("amount", "createdAt", "duesDate", "email", "id", "name", "password", "paymentStatus", "userStatus") SELECT "amount", "createdAt", "duesDate", "email", "id", "name", "password", "paymentStatus", "userStatus" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
