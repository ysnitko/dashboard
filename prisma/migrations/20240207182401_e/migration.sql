-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "managerId" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    CONSTRAINT "Projects_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Projects" ("id", "managerId", "name") SELECT "id", "managerId", "name" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
CREATE UNIQUE INDEX "Projects_managerId_key" ON "Projects"("managerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
