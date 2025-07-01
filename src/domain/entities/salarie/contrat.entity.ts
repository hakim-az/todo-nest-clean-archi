export class Contrat {
  constructor(
    public readonly id: bigint,
    public poste: string,
    public typeContrat: string,
    public dateDebut: Date,
    public dateFin: Date,
    public etablissemnetSante: string,
    public serviceSante: string,
    public salaire: number,
    public urlPdfNonSigner: string,
    public urlPdfSigner: string
  ) {}

  static create(props: Omit<Contrat, 'id'>): Contrat {
    return new Contrat(
      BigInt(0),
      props.poste,
      props.typeContrat,
      props.dateDebut,
      props.dateFin,
      props.etablissemnetSante,
      props.serviceSante,
      props.salaire,
      props.urlPdfNonSigner,
      props.urlPdfSigner
    )
  }
}
