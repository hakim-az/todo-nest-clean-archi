import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Salarie } from '../../../domain/entities/salarie/salarie.entity'
import {
  SalarieRepository,
  SALARIE_REPOSITORY,
} from '../../../domain/contracts/salarie/salarie-repository.interface'
import { UpdateSalarieDto } from '../../dtos/salarie/update-salarie.sto'
import { Naissance } from '../../../domain/entities/salarie/naissance.entity'
import { Adresse } from '../../../domain/entities/salarie/adresse.entity'
import { Paiement } from '../../../domain/entities/salarie/paiement.entity'
import { ContactUrgence } from '../../../domain/entities/salarie/contact-urgence.entity'
import { PiecesJustificatif } from '../../../domain/entities/salarie/pieces-justificatif.entity'
import { Contrat } from '../../../domain/entities/salarie/contrat.entity'

@Injectable()
export class UpdateSalarieUseCase {
  constructor(
    @Inject(SALARIE_REPOSITORY)
    private readonly salarieRepository: SalarieRepository
  ) {}

  async execute(
    id: bigint,
    updateSalarieDto: UpdateSalarieDto
  ): Promise<Salarie> {
    const existing = await this.salarieRepository.findById(id)
    if (!existing) {
      throw new NotFoundException(`Salarie with id ${id} not found`)
    }

    const hasContratUpdate =
      updateSalarieDto.poste !== undefined ||
      updateSalarieDto.typeContrat !== undefined ||
      updateSalarieDto.dateDebut !== undefined ||
      updateSalarieDto.dateFin !== undefined ||
      updateSalarieDto.etablissemnetSante !== undefined ||
      updateSalarieDto.serviceSante !== undefined ||
      updateSalarieDto.salaire !== undefined ||
      updateSalarieDto.urlPdfNonSigner !== undefined ||
      updateSalarieDto.urlPdfSigner !== undefined

    // Safe contract creation or update
    let updatedContrat: Contrat | undefined
    if (hasContratUpdate) {
      if (existing.contrat) {
        updatedContrat = new Contrat(
          existing.contrat.id,
          updateSalarieDto.poste ?? existing.contrat.poste,
          updateSalarieDto.typeContrat ?? existing.contrat.typeContrat,
          updateSalarieDto.dateDebut
            ? new Date(updateSalarieDto.dateDebut)
            : existing.contrat.dateDebut,
          updateSalarieDto.dateFin
            ? new Date(updateSalarieDto.dateFin)
            : existing.contrat.dateFin,
          updateSalarieDto.etablissemnetSante ??
            existing.contrat.etablissemnetSante,
          updateSalarieDto.serviceSante ?? existing.contrat.serviceSante,
          updateSalarieDto.salaire ?? existing.contrat.salaire,
          updateSalarieDto.urlPdfNonSigner ?? existing.contrat.urlPdfNonSigner,
          updateSalarieDto.urlPdfSigner ?? existing.contrat.urlPdfSigner
        )
      } else {
        // Create new contract if none existed before
        updatedContrat = new Contrat(
          0n,
          updateSalarieDto.poste ?? '',
          updateSalarieDto.typeContrat ?? '',
          updateSalarieDto.dateDebut
            ? new Date(updateSalarieDto.dateDebut)
            : new Date(0),
          updateSalarieDto.dateFin
            ? new Date(updateSalarieDto.dateFin)
            : new Date(0),
          updateSalarieDto.etablissemnetSante ?? '',
          updateSalarieDto.serviceSante ?? '',
          updateSalarieDto.salaire ?? 0,
          updateSalarieDto.urlPdfNonSigner ?? '',
          updateSalarieDto.urlPdfSigner ?? ''
        )
      }
    } else {
      updatedContrat = existing.contrat
    }

    const updatedSalarie = Salarie.create({
      prenom: updateSalarieDto.prenom ?? existing.prenom,
      nomDeNaissance:
        updateSalarieDto.nomDeNaissance ?? existing.nomDeNaissance,
      nomUsuel: updateSalarieDto.nomUsuel ?? existing.nomUsuel,
      status: updateSalarieDto.status ?? existing.status,
      situationFamiliale:
        updateSalarieDto.situationFamiliale ?? existing.situationFamiliale,
      emailPerso: updateSalarieDto.emailPerso ?? existing.emailPerso,
      emailPro: updateSalarieDto.emailPro ?? existing.emailPro,
      telPerso: updateSalarieDto.telPerso ?? existing.telPerso,
      telPro: updateSalarieDto.telPro ?? existing.telPro,

      naissance:
        updateSalarieDto.dateDeNaissance ||
        updateSalarieDto.paysDeNaissance ||
        updateSalarieDto.departmentDeNaissance ||
        updateSalarieDto.communeDeNaissance ||
        updateSalarieDto.paysDeNationalite
          ? new Naissance(
              existing.naissance.id,
              updateSalarieDto.dateDeNaissance
                ? new Date(updateSalarieDto.dateDeNaissance)
                : existing.naissance.dateDeNaissance,
              updateSalarieDto.paysDeNaissance ??
                existing.naissance.paysDeNaissance,
              updateSalarieDto.departmentDeNaissance ??
                existing.naissance.departmentDeNaissance,
              updateSalarieDto.communeDeNaissance ??
                existing.naissance.communeDeNaissance,
              updateSalarieDto.paysDeNationalite ??
                existing.naissance.paysDeNationalite
            )
          : existing.naissance,

      adresse:
        updateSalarieDto.adresse ||
        updateSalarieDto.pays ||
        updateSalarieDto.codePostal ||
        updateSalarieDto.ville ||
        updateSalarieDto.complementAdresse
          ? new Adresse(
              existing.adresse.id,
              updateSalarieDto.pays ?? existing.adresse.pays,
              updateSalarieDto.codePostal ?? existing.adresse.codePostal,
              updateSalarieDto.ville ?? existing.adresse.ville,
              updateSalarieDto.adresse ?? existing.adresse.adresse,
              updateSalarieDto.complementAdresse ??
                existing.adresse.complementAdresse
            )
          : existing.adresse,

      paiement:
        updateSalarieDto.iban || updateSalarieDto.bic
          ? new Paiement(
              existing.paiement.id,
              updateSalarieDto.iban ?? existing.paiement.iban,
              updateSalarieDto.bic ?? existing.paiement.bic
            )
          : existing.paiement,

      contactUrgence:
        updateSalarieDto.nomComplet ||
        updateSalarieDto.lienAvecSalarie ||
        updateSalarieDto.tel
          ? new ContactUrgence(
              existing.contactUrgence.id,
              updateSalarieDto.nomComplet ?? existing.contactUrgence.nomComplet,
              updateSalarieDto.lienAvecSalarie ??
                existing.contactUrgence.lienAvecSalarie,
              updateSalarieDto.tel ?? existing.contactUrgence.tel
            )
          : existing.contactUrgence,

      piecesJustificatif:
        updateSalarieDto.carteVitale ||
        updateSalarieDto.rib ||
        updateSalarieDto.pieceIdentite ||
        updateSalarieDto.justificatifDeDomicile
          ? new PiecesJustificatif(
              existing.piecesJustificatif.id,
              updateSalarieDto.carteVitale ??
                existing.piecesJustificatif.carteVitale,
              updateSalarieDto.rib ?? existing.piecesJustificatif.rib,
              updateSalarieDto.pieceIdentite ??
                existing.piecesJustificatif.pieceIdentite,
              updateSalarieDto.justificatifDeDomicile ??
                existing.piecesJustificatif.justificatifDeDomicile
            )
          : existing.piecesJustificatif,

      contrat: updatedContrat,

      // Add other properties as needed
    })

    return this.salarieRepository.update(id, updatedSalarie)
  }
}
