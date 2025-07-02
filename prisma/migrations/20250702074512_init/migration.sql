-- DropForeignKey
ALTER TABLE `salarie` DROP FOREIGN KEY `Salarie_contratId_fkey`;

-- AlterTable
ALTER TABLE `salarie` MODIFY `contratId` BIGINT NULL;

-- AddForeignKey
ALTER TABLE `Salarie` ADD CONSTRAINT `Salarie_contratId_fkey` FOREIGN KEY (`contratId`) REFERENCES `Contrat`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
