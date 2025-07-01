import { PartialType } from '@nestjs/swagger'
import { CreateSalarieDto } from './create-salarie.dto'

export class UpdateSalarieDto extends PartialType(CreateSalarieDto) {}
