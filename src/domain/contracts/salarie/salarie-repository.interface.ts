import { Salarie } from '../../entities/salarie/salarie.entity'

export const SALARIE_REPOSITORY = 'SALARIE_REPOSITORY'

export interface SalarieRepository {
  findById(id: bigint): Promise<Salarie | null>
  findAll(): Promise<Salarie[]>
  create(salarie: Salarie): Promise<Salarie>
  update(id: bigint, salarie: Salarie): Promise<Salarie>
  delete(id: bigint): Promise<void>
}
