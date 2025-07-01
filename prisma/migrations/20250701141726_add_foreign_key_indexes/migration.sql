/*
  Warnings:

  - You are about to alter the column `codePostal` on the `adresse` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `telPerso` on the `salarie` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `telPro` on the `salarie` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `adresse` MODIFY `codePostal` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `paiement` MODIFY `bic` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `salarie` MODIFY `telPerso` INTEGER NOT NULL,
    MODIFY `telPro` INTEGER NOT NULL;
