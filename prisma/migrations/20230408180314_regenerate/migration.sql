/*
  Warnings:

  - You are about to drop the column `text` on the `Slider` table. All the data in the column will be lost.
  - Added the required column `caption` to the `Slider` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Slider" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "caption" TEXT NOT NULL
);
INSERT INTO "new_Slider" ("id", "image") SELECT "id", "image" FROM "Slider";
DROP TABLE "Slider";
ALTER TABLE "new_Slider" RENAME TO "Slider";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
