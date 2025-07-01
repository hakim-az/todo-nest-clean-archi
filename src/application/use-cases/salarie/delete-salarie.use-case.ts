import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import {
  SalarieRepository,
  SALARIE_REPOSITORY,
} from '../../../domain/contracts/salarie/salarie-repository.interface'

@Injectable()
export class DeleteSalarieUseCase {
  constructor(
    @Inject(SALARIE_REPOSITORY)
    private readonly salarieRepository: SalarieRepository
  ) {}

  async execute(id: bigint): Promise<void> {
    const existing = await this.salarieRepository.findById(id)
    if (!existing) {
      throw new NotFoundException(`Salarie with id ${id} not found`)
    }
    await this.salarieRepository.delete(id)
  }
}
