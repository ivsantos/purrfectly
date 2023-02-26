/*
  Warnings:

  - You are about to drop the column `shoppable` on the `Video` table. All the data in the column will be lost.
  - Added the required column `category` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Video" DROP COLUMN "shoppable",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "options" JSONB NOT NULL DEFAULT '{}';
