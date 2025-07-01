/*
  Warnings:

  - You are about to alter the column `iban` on the `paiement` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `paiement` MODIFY `iban` INTEGER NOT NULL;
