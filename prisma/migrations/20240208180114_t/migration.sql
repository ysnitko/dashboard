-- CreateTable
CREATE TABLE "_ProjectsToUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ProjectsToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProjectsToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "managerId" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Projects" ("id", "managerId", "name") SELECT "id", "managerId", "name" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
CREATE UNIQUE INDEX "Projects_managerId_key" ON "Projects"("managerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectsToUsers_AB_unique" ON "_ProjectsToUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectsToUsers_B_index" ON "_ProjectsToUsers"("B");
