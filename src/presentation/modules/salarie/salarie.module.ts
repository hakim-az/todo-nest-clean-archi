import { Module } from '@nestjs/common'
import { SalarieController } from '../../controllers/salarie/salarie.controller'
import { CreateSalarieUseCase } from '../../../application/use-cases/salarie/create-salarie.use-case'
import { GetAllSalariesUseCase } from '../../../application/use-cases/salarie/gat-all-salarie.use-case'
import { GetSalarieByIdUseCase } from '../../../application/use-cases/salarie/gat-salarie-by-id.use-case'
import { UpdateSalarieUseCase } from '../../../application/use-cases/salarie/update-salarie.use-case'
import { DeleteSalarieUseCase } from '../../../application/use-cases/salarie/delete-salarie.use-case'
import { PrismaSalarieRepository } from '../../../infrastructure/repositories/salarie/prisma-salarie.repository'
import { PrismaService } from '../../../infrastructure/database/prisma.service'
import { SALARIE_REPOSITORY } from '../../../domain/contracts/salarie/salarie-repository.interface'

@Module({
  controllers: [SalarieController],
  providers: [
    PrismaService,
    {
      provide: SALARIE_REPOSITORY,
      useClass: PrismaSalarieRepository,
    },
    CreateSalarieUseCase,
    GetAllSalariesUseCase,
    GetSalarieByIdUseCase,
    UpdateSalarieUseCase,
    DeleteSalarieUseCase,
  ],
})
export class SalarieModule {}
