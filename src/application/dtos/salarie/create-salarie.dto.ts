import { ApiProperty } from '@nestjs/swagger'
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  IsEmail,
  // IsPhoneNumber,
  IsNumber,
} from 'class-validator'

export class CreateSalarieDto {
  // salarie feilds ---------------------------------------------------------------------------
  @ApiProperty({
    description: 'Prénom du salarié',
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  prenom: string

  @ApiProperty({
    description: 'Nom de naissance du salarié',
    example: 'Doe',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nomDeNaissance: string

  @ApiProperty({
    description: 'Nom usuel du salarié',
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nomUsuel: string

  @ApiProperty({
    description: 'Statut du salarié',
    example: 'actif',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  status: string

  @ApiProperty({
    description: 'Situation familiale',
    example: 'Célibataire',
  })
  @IsString()
  situationFamiliale: string

  @ApiProperty({
    description: 'Email personnel',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  emailPerso: string

  @ApiProperty({
    description: 'Email professionnel',
    example: 'john.doe@company.com',
  })
  @IsEmail()
  emailPro: string

  @ApiProperty({
    description: 'Téléphone personnel',
    example: '+33123456789',
  })
  @IsNumber()
  telPerso: number

  @ApiProperty({
    description: 'Téléphone professionnel',
    example: '+33123456780',
  })
  @IsNumber()
  telPro: number

  // Naissance fields ------------------------------------------------------------------------------
  @ApiProperty({
    description: 'Date de naissance (ISO)',
    example: '1990-01-01',
  })
  @IsString()
  @IsNotEmpty()
  dateDeNaissance: Date

  @ApiProperty({ description: 'Pays de naissance', example: 'France' })
  @IsString()
  @IsNotEmpty()
  paysDeNaissance: string

  @ApiProperty({ description: 'Département de naissance', example: '75' })
  @IsString()
  @IsNotEmpty()
  departmentDeNaissance: string

  @ApiProperty({ description: 'Commune de naissance', example: 'Paris' })
  @IsString()
  @IsNotEmpty()
  communeDeNaissance: string

  @ApiProperty({ description: 'Pays de nationalité', example: 'France' })
  @IsString()
  @IsNotEmpty()
  paysDeNationalite: string

  // Adresse fields
  @ApiProperty({ description: 'Pays de résidence', example: 'France' })
  @IsString()
  @IsNotEmpty()
  pays: string

  @ApiProperty({ description: 'Code postal', example: 75000 })
  @IsNumber()
  codePostal: number

  @ApiProperty({ description: 'Ville', example: 'Paris' })
  @IsString()
  @IsNotEmpty()
  ville: string

  @ApiProperty({ description: 'Adresse complète', example: '10 rue de Paris' })
  @IsString()
  @IsNotEmpty()
  adresse: string

  @ApiProperty({
    description: "Complément d'adresse",
    example: 'Appartement 2B',
    required: false,
  })
  @IsString()
  @IsOptional()
  complementAdresse: string

  // Paiement fields ----------------------------------------------------------------------------------
  @ApiProperty({ description: 'IBAN', example: '1234567890' })
  @IsString()
  @IsNotEmpty()
  iban: string

  @ApiProperty({ description: 'BIC', example: 'BNPAFRPP' })
  @IsString()
  @IsNotEmpty()
  bic: string

  // Contact urgence fields ----------------------------------------------------------------------------
  @ApiProperty({
    description: "Nom complet du contact d'urgence",
    example: 'Marie Dupont',
  })
  @IsString()
  @IsNotEmpty()
  nomComplet: string

  @ApiProperty({ description: 'Lien avec le salarié', example: 'Sœur' })
  @IsString()
  @IsNotEmpty()
  lienAvecSalarie: string

  @ApiProperty({
    description: "Téléphone du contact d'urgence",
    example: 33123456789,
  })
  @IsNumber()
  tel: number

  // Pièces justificatives fields --------------------------------------------------------------------
  @ApiProperty({
    description: 'Carte vitale (url ou ref)',
    example: 'carte-vitale.jpg',
  })
  @IsString()
  @IsNotEmpty()
  carteVitale: string

  @ApiProperty({ description: 'RIB (url ou ref)', example: 'rib.pdf' })
  @IsString()
  @IsNotEmpty()
  rib: string

  @ApiProperty({
    description: "Pièce d'identité (url ou ref)",
    example: 'id-card.pdf',
  })
  @IsString()
  @IsNotEmpty()
  pieceIdentite: string

  @ApiProperty({
    description: 'Justificatif de domicile (url ou ref)',
    example: 'facture-electricite.pdf',
  })
  @IsString()
  @IsNotEmpty()
  justificatifDeDomicile: string

  // Contrat fields ------------------------------------------------------------------------------------
  @ApiProperty({ description: 'Poste occupé', example: 'Développeur' })
  @IsString()
  @IsOptional()
  poste?: string

  @ApiProperty({ description: 'Type de contrat', example: 'CDI' })
  @IsString()
  @IsOptional()
  typeContrat: string

  @ApiProperty({
    description: 'Date début contrat (ISO)',
    example: '2023-01-01',
  })
  @IsString()
  @IsOptional()
  dateDebut?: Date

  @ApiProperty({
    description: 'Date fin contrat (ISO)',
    example: '2025-01-01',
    required: false,
  })
  @IsString()
  @IsOptional()
  dateFin?: Date

  @ApiProperty({
    description: 'Etablissement de santé',
    example: 'Hôpital de Paris',
  })
  @IsString()
  @IsOptional()
  etablissemnetSante?: string

  @ApiProperty({ description: 'Service santé', example: 'Cardiologie' })
  @IsString()
  @IsOptional()
  serviceSante: string

  @ApiProperty({ description: 'Salaire', example: 3500 })
  @IsNumber()
  @IsOptional()
  salaire?: number

  @ApiProperty({
    description: 'URL PDF non signé',
    example: 'contrat-non-signe.pdf',
  })
  @IsString()
  @IsOptional()
  urlPdfNonSigner?: string

  @ApiProperty({ description: 'URL PDF signé', example: 'contrat-signe.pdf' })
  @IsString()
  @IsOptional()
  urlPdfSigner?: string
}
