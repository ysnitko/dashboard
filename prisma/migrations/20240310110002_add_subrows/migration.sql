-- CreateTable
CREATE TABLE "SubRows" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "userActivity" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "usersId" INTEGER,
    CONSTRAINT "SubRows_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
