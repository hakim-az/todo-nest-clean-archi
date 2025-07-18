import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../database/prisma.service'
import { Salarie } from '../../../domain/entities/salarie/salarie.entity'
import { SalarieRepository } from '../../../domain/contracts/salarie/salarie-repository.interface'
import { Naissance } from '../../../domain/entities/salarie/naissance.entity'
import { Adresse } from '../../../domain/entities/salarie/adresse.entity'
import { Paiement } from '../../../domain/entities/salarie/paiement.entity'
import { ContactUrgence } from '../../../domain/entities/salarie/contact-urgence.entity'
import { PiecesJustificatif } from '../../../domain/entities/salarie/pieces-justificatif.entity'
import { Contrat } from '../../../domain/entities/salarie/contrat.entity'
import { Prisma } from '@prisma/client'

@Injectable()
export class PrismaSalarieRepository implements SalarieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: bigint): Promise<Salarie | null> {
    const salarie = await this.prisma.salarie.findUnique({
      where: { id },
      include: this.includes(),
    })
    return salarie ? this.mapToDomain(salarie) : null
  }

  async findAll(): Promise<Salarie[]> {
    const salaries = await this.prisma.salarie.findMany({
      include: this.includes(),
    })
    return salaries.map(this.mapToDomain)
  }

  async create(salarie: Salarie): Promise<Salarie> {
    let contratCreateData: Prisma.ContratCreateWithoutSalariesInput | undefined

    if (salarie.contrat) {
      contratCreateData = {
        poste: salarie.contrat.poste ?? '',
        typeContrat: salarie.contrat.typeContrat ?? '',
        dateDebut: salarie.contrat.dateDebut ?? new Date(),
        dateFin: salarie.contrat.dateDebut ?? new Date(),
        etablissemnetSante: salarie.contrat.etablissemnetSante ?? '',
        serviceSante: salarie.contrat.serviceSante ?? '',
        salaire: salarie.contrat.salaire ?? 0,
        urlPdfNonSigner: salarie.contrat.urlPdfNonSigner ?? '',
        urlPdfSigner: salarie.contrat.urlPdfSigner ?? '',
      }

      if (
        salarie.contrat.dateFin !== undefined &&
        salarie.contrat.dateFin !== null
      ) {
        contratCreateData.dateFin = salarie.contrat.dateFin
      }
    } else {
      contratCreateData = undefined
    }

    const data: Prisma.SalarieCreateInput = {
      situationFamiliale: salarie.situationFamiliale,
      status: salarie.status,
      prenom: salarie.prenom,
      nomDeNaissance: salarie.nomDeNaissance,
      nomUsuel: salarie.nomUsuel,
      emailPerso: salarie.emailPerso,
      emailPro: salarie.emailPro,
      telPerso: salarie.telPerso,
      telPro: salarie.telPro,

      naissance: {
        create: {
          dateDeNaissance: salarie.naissance.dateDeNaissance,
          paysDeNaissance: salarie.naissance.paysDeNaissance,
          departmentDeNaissance: salarie.naissance.departmentDeNaissance,
          communeDeNaissance: salarie.naissance.communeDeNaissance,
          paysDeNationalite: salarie.naissance.paysDeNationalite,
        },
      },
      adresse: {
        create: {
          pays: salarie.adresse.pays,
          codePostal: salarie.adresse.codePostal,
          ville: salarie.adresse.ville,
          adresse: salarie.adresse.adresse,
          complementAdresse: salarie.adresse.complementAdresse,
        },
      },
      paiement: {
        create: {
          iban: salarie.paiement.iban,
          bic: salarie.paiement.bic,
        },
      },
      contactUrgence: {
        create: {
          nomComplet: salarie.contactUrgence.nomComplet,
          lienAvecSalarie: salarie.contactUrgence.lienAvecSalarie,
          tel: salarie.contactUrgence.tel,
        },
      },
      piecesJustificatif: {
        create: {
          carteVitale: salarie.piecesJustificatif.carteVitale,
          rib: salarie.piecesJustificatif.rib,
          pieceIdentite: salarie.piecesJustificatif.pieceIdentite,
          justificatifDeDomicile:
            salarie.piecesJustificatif.justificatifDeDomicile,
        },
      },
      contrat: contratCreateData ? { create: contratCreateData } : undefined,
    }

    const salarieResponse = await this.prisma.salarie.create({
      data,
      include: this.includes(),
    })

    return this.mapToDomain(salarieResponse)
  }

  async update(id: bigint, salarie: Salarie): Promise<Salarie> {
    const data: Prisma.SalarieUpdateInput = {
      status: salarie.status,
      prenom: salarie.prenom,
      nomDeNaissance: salarie.nomDeNaissance,
      nomUsuel: salarie.nomUsuel,
      situationFamiliale: salarie.situationFamiliale,
      emailPerso: salarie.emailPerso,
      emailPro: salarie.emailPro,
      telPerso: salarie.telPerso,
      telPro: salarie.telPro,

      naissance: {
        update: {
          dateDeNaissance: salarie.naissance.dateDeNaissance,
          paysDeNaissance: salarie.naissance.paysDeNaissance,
          departmentDeNaissance: salarie.naissance.departmentDeNaissance,
          communeDeNaissance: salarie.naissance.communeDeNaissance,
          paysDeNationalite: salarie.naissance.paysDeNationalite,
        },
      },

      adresse: {
        update: {
          pays: salarie.adresse.pays,
          codePostal: salarie.adresse.codePostal,
          ville: salarie.adresse.ville,
          adresse: salarie.adresse.adresse,
          complementAdresse: salarie.adresse.complementAdresse,
        },
      },

      paiement: {
        update: {
          iban: salarie.paiement.iban,
          bic: salarie.paiement.bic,
        },
      },

      contactUrgence: {
        update: {
          nomComplet: salarie.contactUrgence.nomComplet,
          lienAvecSalarie: salarie.contactUrgence.lienAvecSalarie,
          tel: salarie.contactUrgence.tel,
        },
      },

      piecesJustificatif: {
        update: {
          carteVitale: salarie.piecesJustificatif.carteVitale,
          rib: salarie.piecesJustificatif.rib,
          pieceIdentite: salarie.piecesJustificatif.pieceIdentite,
          justificatifDeDomicile:
            salarie.piecesJustificatif.justificatifDeDomicile,
        },
      },
    }

    if (salarie.contrat) {
      data.contrat = {
        upsert: {
          update: {
            poste: salarie.contrat.poste,
            typeContrat: salarie.contrat.typeContrat,
            dateDebut: salarie.contrat.dateDebut,
            dateFin: salarie.contrat.dateFin ?? undefined,
            etablissemnetSante: salarie.contrat.etablissemnetSante,
            serviceSante: salarie.contrat.serviceSante,
            salaire: salarie.contrat.salaire,
            urlPdfNonSigner: salarie.contrat.urlPdfNonSigner,
            urlPdfSigner: salarie.contrat.urlPdfSigner,
          },
          create: {
            poste: salarie.contrat.poste,
            typeContrat: salarie.contrat.typeContrat,
            dateDebut: salarie.contrat.dateDebut,
            dateFin: salarie.contrat.dateFin ?? '',
            etablissemnetSante: salarie.contrat.etablissemnetSante,
            serviceSante: salarie.contrat.serviceSante,
            salaire: salarie.contrat.salaire,
            urlPdfNonSigner: salarie.contrat.urlPdfNonSigner,
            urlPdfSigner: salarie.contrat.urlPdfSigner,
          },
        },
      }
    }

    const updated = await this.prisma.salarie.update({
      where: { id },
      data,
      include: this.includes(),
    })

    return this.mapToDomain(updated)
  }

  async delete(id: bigint): Promise<void> {
    await this.prisma.salarie.delete({ where: { id } })
  }

  private includes() {
    return {
      naissance: true,
      adresse: true,
      paiement: true,
      contactUrgence: true,
      piecesJustificatif: true,
      contrat: true,
    }
  }

  private mapToDomain(raw: any): Salarie {
    return new Salarie(
      raw.id,
      raw.status,
      raw.prenom,
      raw.nomDeNaissance,
      raw.nomUsuel,
      raw.situationFamiliale,
      raw.emailPerso,
      raw.emailPro,
      raw.telPerso,
      raw.telPro,

      new Naissance(
        raw.naissance.id,
        raw.naissance.dateDeNaissance,
        raw.naissance.paysDeNaissance,
        raw.naissance.departmentDeNaissance,
        raw.naissance.communeDeNaissance,
        raw.naissance.paysDeNationalite
      ),
      new Adresse(
        raw.adresse.id,
        raw.adresse.pays,
        raw.adresse.codePostal,
        raw.adresse.ville,
        raw.adresse.adresse,
        raw.adresse.complementAdresse
      ),
      new Paiement(raw.paiement.id, raw.paiement.iban, raw.paiement.bic),
      new ContactUrgence(
        raw.contactUrgence.id,
        raw.contactUrgence.nomComplet,
        raw.contactUrgence.lienAvecSalarie,
        raw.contactUrgence.tel
      ),
      new PiecesJustificatif(
        raw.piecesJustificatif.id,
        raw.piecesJustificatif.carteVitale,
        raw.piecesJustificatif.rib,
        raw.piecesJustificatif.pieceIdentite,
        raw.piecesJustificatif.justificatifDeDomicile
      ),
      raw.contrat
        ? new Contrat(
            raw.contrat.id,
            raw.contrat.poste,
            raw.contrat.typeContrat,
            raw.contrat.dateDebut,
            raw.contrat.dateFin ?? null,
            raw.contrat.etablissemnetSante,
            raw.contrat.serviceSante,
            raw.contrat.salaire,
            raw.contrat.urlPdfNonSigner,
            raw.contrat.urlPdfSigner
          )
        : undefined
    )
  }
}
