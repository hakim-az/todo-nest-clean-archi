export class Adresse {
  constructor(
    public readonly id: bigint,
    public pays: string,
    public codePostal: number,
    public ville: string,
    public adresse: string,
    public complementAdresse: string
  ) {}

  static create(props: Omit<Adresse, 'id'>): Adresse {
    return new Adresse(
      BigInt(0),
      props.pays,
      props.codePostal,
      props.ville,
      props.adresse,
      props.complementAdresse
    )
  }
}
