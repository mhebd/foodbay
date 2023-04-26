/*
  Warnings:

  - Added the required column `icon` to the `FeaturedCard` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FeaturedCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "caption" TEXT NOT NULL,
    "icon" TEXT NOT NULL
);
INSERT INTO "new_FeaturedCard" ("caption", "id", "title") SELECT "caption", "id", "title" FROM "FeaturedCard";
DROP TABLE "FeaturedCard";
ALTER TABLE "new_FeaturedCard" RENAME TO "FeaturedCard";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
