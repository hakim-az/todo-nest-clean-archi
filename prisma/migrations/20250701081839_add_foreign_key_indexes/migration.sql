/*
  Warnings:

  - You are about to drop the column `code_postal` on the `adresse` table. All the data in the column will be lost.
  - You are about to drop the column `compliment_adresse` on the `adresse` table. All the data in the column will be lost.
  - You are about to drop the column `date_debut` on the `contrat` table. All the data in the column will be lost.
  - You are about to drop the column `date_fin` on the `contrat` table. All the data in the column will be lost.
  - You are about to drop the column `document_id_yousign` on the `contrat` table. All the data in the column will be lost.
  - You are about to drop the column `etablissement_de_sante` on the `contrat` table. All the data in the column will be lost.
  - You are about to drop the column `fichier_contrat_non_signer` on the `contrat` table. All the data in the column will be lost.
  - You are about to drop the column `service_de_sante` on the `contrat` table. All the data in the column will be lost.
  - You are about to drop the column `signature_request_id_yousign` on the `contrat` table. All the data in the column will be lost.
  - You are about to drop the column `type_contrat` on the `contrat` table. All the data in the column will be lost.
  - You are about to alter the column `salaire` on the `contrat` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.
  - You are about to drop the column `commune_de_naissance` on the `naissance` table. All the data in the column will be lost.
  - You are about to drop the column `date_de_naissance` on the `naissance` table. All the data in the column will be lost.
  - You are about to drop the column `department_de_naissance` on the `naissance` table. All the data in the column will be lost.
  - You are about to drop the column `pays_de_naissance` on the `naissance` table. All the data in the column will be lost.
  - You are about to drop the column `pays_de_nationalite` on the `naissance` table. All the data in the column will be lost.
  - You are about to drop the column `email_perso` on the `salarie` table. All the data in the column will be lost.
  - You are about to drop the column `email_pro` on the `salarie` table. All the data in the column will be lost.
  - You are about to drop the column `id_adresse` on the `salarie` table. All the data in the column will be lost.
  - You are about to drop the column `id_contact_urgence` on the `salarie` table. All the data in the column will be lost.
  - You are about to drop the column `id_contrat` on the `salarie` table. All the data in the column will be lost.
  - You are about to drop the column `id_naissance` on the `salarie` table. All the data in the column will be lost.
  - You are about to drop the column `id_paiement` on the `salarie` table. All the data in the column will be lost.
  - You are about to drop the column `id_pieces_justificatif` on the `salarie` table. All the data in the column will be lost.
  - You are about to drop the column `nom_de_naissance` on the `salarie` table. All the data in the column will be lost.
  - You are about to drop the column `nom_usuel` on the `salarie` table. All the data in the column will be lost.
  - You are about to drop the column `situation_familiale` on the `salarie` table. All the data in the column will be lost.
  - You are about to drop the column `tel_perso` on the `salarie` table. All the data in the column will be lost.
  - You are about to drop the column `tel_pro` on the `salarie` table. All the data in the column will be lost.
  - You are about to drop the `contacte_urgence` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pieces_justificatif` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `codePostal` to the `Adresse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complementAdresse` to the `Adresse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateDebut` to the `Contrat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateFin` to the `Contrat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `etablissemnetSante` to the `Contrat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceSante` to the `Contrat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeContrat` to the `Contrat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlPdfNonSigner` to the `Contrat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlPdfSigner` to the `Contrat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `communeDeNaissance` to the `Naissance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateDeNaissance` to the `Naissance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departmentDeNaissance` to the `Naissance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paysDeNaissance` to the `Naissance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paysDeNationalite` to the `Naissance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adresseId` to the `Salarie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactUrgenceId` to the `Salarie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contratId` to the `Salarie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailPerso` to the `Salarie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailPro` to the `Salarie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `naissanceId` to the `Salarie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomDeNaissance` to the `Salarie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomUsuel` to the `Salarie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paiementId` to the `Salarie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `piecesJustificatifId` to the `Salarie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `situationFamiliale` to the `Salarie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telPerso` to the `Salarie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telPro` to the `Salarie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `salarie` DROP FOREIGN KEY `Salarie_id_adresse_fkey`;

-- DropForeignKey
ALTER TABLE `salarie` DROP FOREIGN KEY `Salarie_id_contact_urgence_fkey`;

-- DropForeignKey
ALTER TABLE `salarie` DROP FOREIGN KEY `Salarie_id_contrat_fkey`;

-- DropForeignKey
ALTER TABLE `salarie` DROP FOREIGN KEY `Salarie_id_naissance_fkey`;

-- DropForeignKey
ALTER TABLE `salarie` DROP FOREIGN KEY `Salarie_id_paiement_fkey`;

-- DropForeignKey
ALTER TABLE `salarie` DROP FOREIGN KEY `Salarie_id_pieces_justificatif_fkey`;

-- DropIndex
DROP INDEX `Salarie_id_adresse_fkey` ON `salarie`;

-- DropIndex
DROP INDEX `Salarie_id_contact_urgence_fkey` ON `salarie`;

-- DropIndex
DROP INDEX `Salarie_id_contrat_fkey` ON `salarie`;

-- DropIndex
DROP INDEX `Salarie_id_naissance_fkey` ON `salarie`;

-- DropIndex
DROP INDEX `Salarie_id_paiement_fkey` ON `salarie`;

-- DropIndex
DROP INDEX `Salarie_id_pieces_justificatif_fkey` ON `salarie`;

-- AlterTable
ALTER TABLE `adresse` DROP COLUMN `code_postal`,
    DROP COLUMN `compliment_adresse`,
    ADD COLUMN `codePostal` BIGINT NOT NULL,
    ADD COLUMN `complementAdresse` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `contrat` DROP COLUMN `date_debut`,
    DROP COLUMN `date_fin`,
    DROP COLUMN `document_id_yousign`,
    DROP COLUMN `etablissement_de_sante`,
    DROP COLUMN `fichier_contrat_non_signer`,
    DROP COLUMN `service_de_sante`,
    DROP COLUMN `signature_request_id_yousign`,
    DROP COLUMN `type_contrat`,
    ADD COLUMN `dateDebut` DATETIME(3) NOT NULL,
    ADD COLUMN `dateFin` DATETIME(3) NOT NULL,
    ADD COLUMN `etablissemnetSante` VARCHAR(191) NOT NULL,
    ADD COLUMN `serviceSante` VARCHAR(191) NOT NULL,
    ADD COLUMN `typeContrat` VARCHAR(191) NOT NULL,
    ADD COLUMN `urlPdfNonSigner` VARCHAR(191) NOT NULL,
    ADD COLUMN `urlPdfSigner` VARCHAR(191) NOT NULL,
    MODIFY `salaire` BIGINT NOT NULL;

-- AlterTable
ALTER TABLE `naissance` DROP COLUMN `commune_de_naissance`,
    DROP COLUMN `date_de_naissance`,
    DROP COLUMN `department_de_naissance`,
    DROP COLUMN `pays_de_naissance`,
    DROP COLUMN `pays_de_nationalite`,
    ADD COLUMN `communeDeNaissance` VARCHAR(191) NOT NULL,
    ADD COLUMN `dateDeNaissance` DATETIME(3) NOT NULL,
    ADD COLUMN `departmentDeNaissance` VARCHAR(191) NOT NULL,
    ADD COLUMN `paysDeNaissance` VARCHAR(191) NOT NULL,
    ADD COLUMN `paysDeNationalite` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `salarie` DROP COLUMN `email_perso`,
    DROP COLUMN `email_pro`,
    DROP COLUMN `id_adresse`,
    DROP COLUMN `id_contact_urgence`,
    DROP COLUMN `id_contrat`,
    DROP COLUMN `id_naissance`,
    DROP COLUMN `id_paiement`,
    DROP COLUMN `id_pieces_justificatif`,
    DROP COLUMN `nom_de_naissance`,
    DROP COLUMN `nom_usuel`,
    DROP COLUMN `situation_familiale`,
    DROP COLUMN `tel_perso`,
    DROP COLUMN `tel_pro`,
    ADD COLUMN `adresseId` BIGINT NOT NULL,
    ADD COLUMN `contactUrgenceId` BIGINT NOT NULL,
    ADD COLUMN `contratId` BIGINT NOT NULL,
    ADD COLUMN `emailPerso` VARCHAR(191) NOT NULL,
    ADD COLUMN `emailPro` VARCHAR(191) NOT NULL,
    ADD COLUMN `naissanceId` BIGINT NOT NULL,
    ADD COLUMN `nomDeNaissance` VARCHAR(191) NOT NULL,
    ADD COLUMN `nomUsuel` VARCHAR(191) NOT NULL,
    ADD COLUMN `paiementId` BIGINT NOT NULL,
    ADD COLUMN `piecesJustificatifId` BIGINT NOT NULL,
    ADD COLUMN `situationFamiliale` BIGINT NOT NULL,
    ADD COLUMN `telPerso` VARCHAR(191) NOT NULL,
    ADD COLUMN `telPro` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `contacte_urgence`;

-- DropTable
DROP TABLE `pieces_justificatif`;

-- CreateTable
CREATE TABLE `ContactUrgence` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `nomComplet` VARCHAR(191) NOT NULL,
    `lienAvecSalarie` VARCHAR(191) NOT NULL,
    `tel` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PiecesJustificatif` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `carteVitale` VARCHAR(191) NOT NULL,
    `rib` VARCHAR(191) NOT NULL,
    `pieceIdentite` VARCHAR(191) NOT NULL,
    `justificatifDeDomicile` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Salarie_naissanceId_idx` ON `Salarie`(`naissanceId`);

-- CreateIndex
CREATE INDEX `Salarie_adresseId_idx` ON `Salarie`(`adresseId`);

-- CreateIndex
CREATE INDEX `Salarie_paiementId_idx` ON `Salarie`(`paiementId`);

-- CreateIndex
CREATE INDEX `Salarie_contactUrgenceId_idx` ON `Salarie`(`contactUrgenceId`);

-- CreateIndex
CREATE INDEX `Salarie_piecesJustificatifId_idx` ON `Salarie`(`piecesJustificatifId`);

-- CreateIndex
CREATE INDEX `Salarie_contratId_idx` ON `Salarie`(`contratId`);

-- AddForeignKey
ALTER TABLE `Salarie` ADD CONSTRAINT `Salarie_naissanceId_fkey` FOREIGN KEY (`naissanceId`) REFERENCES `Naissance`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salarie` ADD CONSTRAINT `Salarie_adresseId_fkey` FOREIGN KEY (`adresseId`) REFERENCES `Adresse`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salarie` ADD CONSTRAINT `Salarie_paiementId_fkey` FOREIGN KEY (`paiementId`) REFERENCES `Paiement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salarie` ADD CONSTRAINT `Salarie_contactUrgenceId_fkey` FOREIGN KEY (`contactUrgenceId`) REFERENCES `ContactUrgence`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salarie` ADD CONSTRAINT `Salarie_piecesJustificatifId_fkey` FOREIGN KEY (`piecesJustificatifId`) REFERENCES `PiecesJustificatif`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salarie` ADD CONSTRAINT `Salarie_contratId_fkey` FOREIGN KEY (`contratId`) REFERENCES `Contrat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
