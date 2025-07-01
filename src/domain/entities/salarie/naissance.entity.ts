export class Naissance {
  constructor(
    public readonly id: bigint,
    public dateDeNaissance: Date,
    public paysDeNaissance: string,
    public departmentDeNaissance: string,
    public communeDeNaissance: string,
    public paysDeNationalite: string
  ) {}

  static create(props: Omit<Naissance, 'id'>): Naissance {
    return new Naissance(
      BigInt(0),
      props.dateDeNaissance,
      props.paysDeNaissance,
      props.departmentDeNaissance,
      props.communeDeNaissance,
      props.paysDeNationalite
    )
  }
}
