export class Paiement {
  constructor(
    public readonly id: bigint,
    public iban: string,
    public bic: string
  ) {}

  static create(props: Omit<Paiement, 'id'>): Paiement {
    return new Paiement(BigInt(0), props.iban, props.bic)
  }
}
