import { ApiProperty } from '@nestjs/swagger'
import { Salarie } from '../../../domain/entities/salarie/salarie.entity'
import { Contrat } from '@prisma/client'

export class SalarieResponseDto {
  @ApiProperty({ example: '1234567890' })
  id: string

  @ApiProperty({ example: 'Jean' })
  prenom: string

  @ApiProperty({ example: 'Dupont' })
  nomDeNaissance: string

  @ApiProperty({ example: 'Dupont' })
  nomUsuel: string

  @ApiProperty({ example: 'Célibataire' })
  situationFamiliale: string

  @ApiProperty({ example: 'jean.dupont@example.com', nullable: true })
  emailPerso?: string | null

  @ApiProperty({ example: 'jean.dupont@company.com', nullable: true })
  emailPro?: string | null

  @ApiProperty({ example: '0612345678' })
  telPerso: string

  @ApiProperty({ example: '0678123456', nullable: true })
  telPro?: string | null

  @ApiProperty({ example: '1985-07-15T00:00:00.000Z' })
  dateDeNaissance: Date

  @ApiProperty({ example: 'France' })
  paysDeNaissance: string

  @ApiProperty({ example: '75' })
  departmentDeNaissance: string

  @ApiProperty({ example: 'Paris' })
  communeDeNaissance: string

  @ApiProperty({ example: 'France' })
  paysDeNationalite: string

  @ApiProperty({ example: '75001' })
  codePostal: string

  @ApiProperty({ example: 'Paris' })
  ville: string

  @ApiProperty({ example: '12 rue des Lilas' })
  adresse: string

  @ApiProperty({ example: 'Appartement 4B', nullable: true })
  complementAdresse?: string | null

  @ApiProperty({ example: '12345567890' })
  iban: string

  @ApiProperty({ example: 'AGRIFRPP' })
  bic: string

  @ApiProperty({ example: 'Marie Dupont' })
  nomCompletContactUrgence: string

  @ApiProperty({ example: 'Soeur' })
  lienAvecSalarieContactUrgence: string

  @ApiProperty({ example: '0611122233' })
  telContactUrgence: string

  @ApiProperty({ example: 'tets' })
  carteVitale: string

  @ApiProperty({ example: 'test' })
  rib: string

  @ApiProperty({ example: 'test' })
  pieceIdentite: string

  @ApiProperty({ example: 'test' })
  justificatifDeDomicile: string

  @ApiProperty({ example: 'Développeur' })
  poste?: string

  @ApiProperty({ example: 'CDI' })
  typeContrat?: string

  @ApiProperty({ example: '2023-01-01T00:00:00.000Z' })
  dateDebut?: Date

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z', nullable: true })
  dateFin?: Date | null

  @ApiProperty({ example: 'Hôpital Saint-Louis' })
  etablissemnetSante?: string

  @ApiProperty({ example: 'Service informatique' })
  serviceSante?: string

  @ApiProperty({ example: 3500 })
  salaire?: number

  @ApiProperty({
    example: 'https://example.com/contrat-non-signe.pdf',
    nullable: true,
  })
  urlPdfNonSigner?: string | null

  @ApiProperty({
    example: 'https://example.com/contrat-signe.pdf',
    nullable: true,
  })
  urlPdfSigner?: string | null

  static fromDomain(salarie: Salarie): SalarieResponseDto {
    const contrat = salarie.contrat ?? ({} as Contrat)

    return {
      id: salarie.id.toString(),
      prenom: salarie.prenom,
      nomDeNaissance: salarie.nomDeNaissance,
      nomUsuel: salarie.nomUsuel,
      situationFamiliale: salarie.situationFamiliale,
      emailPerso: salarie.emailPerso ?? null,
      emailPro: salarie.emailPro ?? null,
      telPerso: salarie.telPerso.toString(),
      telPro: salarie.telPro.toString(),
      dateDeNaissance: salarie.naissance.dateDeNaissance,
      paysDeNaissance: salarie.naissance.paysDeNaissance,
      departmentDeNaissance: salarie.naissance.departmentDeNaissance,
      communeDeNaissance: salarie.naissance.communeDeNaissance,
      paysDeNationalite: salarie.naissance.paysDeNationalite,
      codePostal: salarie.adresse.codePostal.toString(),
      ville: salarie.adresse.ville,
      adresse: salarie.adresse.adresse,
      complementAdresse: salarie.adresse.complementAdresse ?? null,
      iban: salarie.paiement.iban,
      bic: salarie.paiement.bic,
      nomCompletContactUrgence: salarie.contactUrgence.nomComplet,
      lienAvecSalarieContactUrgence: salarie.contactUrgence.lienAvecSalarie,
      telContactUrgence: salarie.contactUrgence.tel.toString(),
      carteVitale: salarie.piecesJustificatif.carteVitale,
      rib: salarie.piecesJustificatif.rib,
      pieceIdentite: salarie.piecesJustificatif.pieceIdentite,
      justificatifDeDomicile: salarie.piecesJustificatif.justificatifDeDomicile,
      poste: contrat.poste ?? '',
      typeContrat: contrat.typeContrat ?? '',
      dateDebut: contrat.dateDebut ?? new Date(0),
      dateFin: contrat.dateFin ?? null,
      etablissemnetSante: contrat.etablissemnetSante ?? '',
      serviceSante: contrat.serviceSante ?? '',
      salaire: contrat.salaire ?? 0,
      urlPdfNonSigner: contrat.urlPdfNonSigner ?? null,
      urlPdfSigner: contrat.urlPdfSigner ?? null,
    }
  }
}
