import { Inject, Injectable } from '@nestjs/common'
import { Salarie } from '../../../domain/entities/salarie/salarie.entity'
import {
  SalarieRepository,
  SALARIE_REPOSITORY,
} from '../../../domain/contracts/salarie/salarie-repository.interface'
import { CreateSalarieDto } from '../../dtos/salarie/create-salarie.dto'
import { Naissance } from '../../../domain/entities/salarie/naissance.entity'
import { Adresse } from '../../../domain/entities/salarie/adresse.entity'
import { Paiement } from '../../../domain/entities/salarie/paiement.entity'
import { ContactUrgence } from '../../../domain/entities/salarie/contact-urgence.entity'
import { PiecesJustificatif } from '../../../domain/entities/salarie/pieces-justificatif.entity'
import { Contrat } from '../../../domain/entities/salarie/contrat.entity'

@Injectable()
export class CreateSalarieUseCase {
  constructor(
    @Inject(SALARIE_REPOSITORY)
    private readonly salarieRepository: SalarieRepository
  ) {}

  async execute(createSalarieDto: CreateSalarieDto): Promise<Salarie> {
    const contrat =
      createSalarieDto.poste &&
      createSalarieDto.typeContrat &&
      createSalarieDto.dateDebut &&
      createSalarieDto.etablissemnetSante &&
      createSalarieDto.serviceSante &&
      createSalarieDto.salaire !== undefined &&
      createSalarieDto.urlPdfNonSigner &&
      createSalarieDto.urlPdfNonSigner
        ? new Contrat(
            0n,
            createSalarieDto.poste,
            createSalarieDto.typeContrat,
            new Date(createSalarieDto.dateDebut),
            createSalarieDto.dateFin
              ? new Date(createSalarieDto.dateFin)
              : null,
            createSalarieDto.etablissemnetSante,
            createSalarieDto.serviceSante,
            createSalarieDto.salaire,
            createSalarieDto.urlPdfNonSigner,
            createSalarieDto.urlPdfNonSigner
          )
        : undefined

    const salarie = Salarie.create({
      ...createSalarieDto,
      situationFamiliale: createSalarieDto.situationFamiliale,
      naissance: new Naissance(
        0n,
        new Date(createSalarieDto.dateDeNaissance),
        createSalarieDto.paysDeNaissance,
        createSalarieDto.departmentDeNaissance,
        createSalarieDto.communeDeNaissance,
        createSalarieDto.paysDeNationalite
      ),
      adresse: new Adresse(
        0n,
        createSalarieDto.pays,
        createSalarieDto.codePostal,
        createSalarieDto.ville,
        createSalarieDto.adresse,
        createSalarieDto.complementAdresse
      ),
      paiement: new Paiement(0n, createSalarieDto.iban, createSalarieDto.bic),
      contactUrgence: new ContactUrgence(
        0n,
        createSalarieDto.nomComplet,
        createSalarieDto.lienAvecSalarie,
        createSalarieDto.tel
      ),
      piecesJustificatif: new PiecesJustificatif(
        0n,
        createSalarieDto.carteVitale,
        createSalarieDto.rib,
        createSalarieDto.pieceIdentite,
        createSalarieDto.justificatifDeDomicile
      ),
      contrat, // optional
    })

    return await this.salarieRepository.create(salarie)
  }
}
