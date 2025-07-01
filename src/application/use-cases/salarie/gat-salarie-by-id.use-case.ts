import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Salarie } from '../../../domain/entities/salarie/salarie.entity'
import {
  SalarieRepository,
  SALARIE_REPOSITORY,
} from '../../../domain/contracts/salarie/salarie-repository.interface'

@Injectable()
export class GetSalarieByIdUseCase {
  constructor(
    @Inject(SALARIE_REPOSITORY)
    private readonly salarieRepository: SalarieRepository
  ) {}

  async execute(id: bigint): Promise<Salarie> {
    const salarie = await this.salarieRepository.findById(id)
    if (!salarie) {
      throw new NotFoundException(`Salarie with id ${id} not found`)
    }
    return salarie
  }
}
