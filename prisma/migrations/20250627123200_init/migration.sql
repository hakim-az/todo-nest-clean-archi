-- CreateTable
CREATE TABLE `Naissance` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `date_de_naissance` DATETIME(3) NOT NULL,
    `pays_de_naissance` VARCHAR(191) NOT NULL,
    `department_de_naissance` VARCHAR(191) NOT NULL,
    `commune_de_naissance` VARCHAR(191) NOT NULL,
    `pays_de_nationalite` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Adresse` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `pays` VARCHAR(191) NOT NULL,
    `code_postal` BIGINT NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `compliment_adresse` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paiement` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `iban` BIGINT NOT NULL,
    `bic` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contacte_Urgence` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `nom_complet` VARCHAR(191) NOT NULL,
    `lien_avec_salarie` VARCHAR(191) NOT NULL,
    `tel` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pieces_Justificatif` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `carte_vitale` VARCHAR(191) NOT NULL,
    `rib` VARCHAR(191) NOT NULL,
    `piece_identite` VARCHAR(191) NOT NULL,
    `justificatif_de_domicile` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contrat` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `fichier_contrat_non_signer` VARCHAR(191) NOT NULL,
    `signature_request_id_yousign` VARCHAR(191) NOT NULL,
    `document_id_yousign` VARCHAR(191) NOT NULL,
    `poste` VARCHAR(191) NOT NULL,
    `type_contrat` VARCHAR(191) NOT NULL,
    `date_debut` VARCHAR(191) NOT NULL,
    `date_fin` VARCHAR(191) NOT NULL,
    `etablissement_de_sante` VARCHAR(191) NOT NULL,
    `service_de_sante` VARCHAR(191) NOT NULL,
    `salaire` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Salarie` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `nom_de_naissance` VARCHAR(191) NOT NULL,
    `nom_usuel` VARCHAR(191) NOT NULL,
    `situation_familiale` BIGINT NOT NULL,
    `email_perso` VARCHAR(191) NOT NULL,
    `email_pro` VARCHAR(191) NOT NULL,
    `tel_perso` VARCHAR(191) NOT NULL,
    `tel_pro` VARCHAR(191) NOT NULL,
    `id_naissance` BIGINT NOT NULL,
    `id_adresse` BIGINT NOT NULL,
    `id_paiement` BIGINT NOT NULL,
    `id_contact_urgence` BIGINT NOT NULL,
    `id_pieces_justificatif` BIGINT NOT NULL,
    `id_contrat` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Salarie` ADD CONSTRAINT `Salarie_id_naissance_fkey` FOREIGN KEY (`id_naissance`) REFERENCES `Naissance`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salarie` ADD CONSTRAINT `Salarie_id_adresse_fkey` FOREIGN KEY (`id_adresse`) REFERENCES `Adresse`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salarie` ADD CONSTRAINT `Salarie_id_paiement_fkey` FOREIGN KEY (`id_paiement`) REFERENCES `Paiement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salarie` ADD CONSTRAINT `Salarie_id_contact_urgence_fkey` FOREIGN KEY (`id_contact_urgence`) REFERENCES `Contacte_Urgence`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salarie` ADD CONSTRAINT `Salarie_id_pieces_justificatif_fkey` FOREIGN KEY (`id_pieces_justificatif`) REFERENCES `Pieces_Justificatif`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salarie` ADD CONSTRAINT `Salarie_id_contrat_fkey` FOREIGN KEY (`id_contrat`) REFERENCES `Contrat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
