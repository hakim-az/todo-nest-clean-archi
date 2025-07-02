/*
  Warnings:

  - You are about to alter the column `tel` on the `contacturgence` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `salaire` on the `contrat` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `contacturgence` MODIFY `tel` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `contrat` MODIFY `salaire` INTEGER NOT NULL;
