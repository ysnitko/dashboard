-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueData" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "progress" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_Projects" ("createdAt", "dueData", "id", "name", "progress", "status", "userId") SELECT "createdAt", "dueData", "id", "name", "progress", "status", "userId" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
