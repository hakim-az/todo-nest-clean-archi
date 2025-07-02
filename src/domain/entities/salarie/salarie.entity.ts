import { Naissance } from './naissance.entity'
import { Adresse } from './adresse.entity'
import { Paiement } from './paiement.entity'
import { ContactUrgence } from './contact-urgence.entity'
import { PiecesJustificatif } from './pieces-justificatif.entity'
import { Contrat } from './contrat.entity'

export class Salarie {
  constructor(
    public readonly id: bigint,
    public status: string,
    public prenom: string,
    public nomDeNaissance: string,
    public nomUsuel: string,
    public situationFamiliale: string,
    public emailPerso: string,
    public emailPro: string,
    public telPerso: number,
    public telPro: number,

    public naissance: Naissance,
    public adresse: Adresse,
    public paiement: Paiement,
    public contactUrgence: ContactUrgence,
    public piecesJustificatif: PiecesJustificatif,
    public contrat?: Contrat
  ) {}

  static create(props: Omit<Salarie, 'id'>): Salarie {
    return new Salarie(
      BigInt(0), // placeholder until created by DB
      props.status,
      props.prenom,
      props.nomDeNaissance,
      props.nomUsuel,
      props.situationFamiliale,
      props.emailPerso,
      props.emailPro,
      props.telPerso,
      props.telPro,
      props.naissance,
      props.adresse,
      props.paiement,
      props.contactUrgence,
      props.piecesJustificatif,
      props.contrat
    )
  }
}
