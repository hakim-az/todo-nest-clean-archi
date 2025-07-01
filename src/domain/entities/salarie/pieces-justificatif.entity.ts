export class PiecesJustificatif {
  constructor(
    public readonly id: bigint,
    public carteVitale: string,
    public rib: string,
    public pieceIdentite: string,
    public justificatifDeDomicile: string
  ) {}

  static create(props: Omit<PiecesJustificatif, 'id'>): PiecesJustificatif {
    return new PiecesJustificatif(
      BigInt(0),
      props.carteVitale,
      props.rib,
      props.pieceIdentite,
      props.justificatifDeDomicile
    )
  }
}
