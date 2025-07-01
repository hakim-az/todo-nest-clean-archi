import { Inject, Injectable } from '@nestjs/common'
import { Salarie } from '../../../domain/entities/salarie/salarie.entity'
import {
  SalarieRepository,
  SALARIE_REPOSITORY,
} from '../../../domain/contracts/salarie/salarie-repository.interface'

@Injectable()
export class GetAllSalariesUseCase {
  constructor(
    @Inject(SALARIE_REPOSITORY)
    private readonly salarieRepository: SalarieRepository
  ) {}

  async execute(): Promise<Salarie[]> {
    return await this.salarieRepository.findAll()
  }
}
