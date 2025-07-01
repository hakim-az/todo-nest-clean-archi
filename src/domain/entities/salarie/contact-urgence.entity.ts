export class ContactUrgence {
  constructor(
    public readonly id: bigint,
    public nomComplet: string,
    public lienAvecSalarie: string,
    public tel: number
  ) {}

  static create(props: Omit<ContactUrgence, 'id'>): ContactUrgence {
    return new ContactUrgence(
      BigInt(0),
      props.nomComplet,
      props.lienAvecSalarie,
      props.tel
    )
  }
}
