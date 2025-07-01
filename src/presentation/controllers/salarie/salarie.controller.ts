import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger'

import { CreateSalarieDto } from '../../../application/dtos/salarie/create-salarie.dto'
import { UpdateSalarieDto } from '../../../application/dtos/salarie/update-salarie.sto'
import { SalarieResponseDto } from '../../../application/dtos/salarie/reponse-salarie.dto'

import { CreateSalarieUseCase } from '../../../application/use-cases/salarie/create-salarie.use-case'
import { GetAllSalariesUseCase } from '../../../application/use-cases/salarie/gat-all-salarie.use-case'
import { GetSalarieByIdUseCase } from '../../../application/use-cases/salarie/gat-salarie-by-id.use-case'
import { UpdateSalarieUseCase } from '../../../application/use-cases/salarie/update-salarie.use-case'
import { DeleteSalarieUseCase } from '../../../application/use-cases/salarie/delete-salarie.use-case'

@ApiTags('salaries')
@Controller('salaries')
export class SalarieController {
  constructor(
    private readonly createSalarieUseCase: CreateSalarieUseCase,
    private readonly getAllSalariesUseCase: GetAllSalariesUseCase,
    private readonly getSalarieByIdUseCase: GetSalarieByIdUseCase,
    private readonly updateSalarieUseCase: UpdateSalarieUseCase,
    private readonly deleteSalarieUseCase: DeleteSalarieUseCase
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new salarie' })
  @ApiResponse({
    status: 201,
    description: 'Salarie created successfully',
    type: SalarieResponseDto,
  })
  async create(
    @Body() createSalarieDto: CreateSalarieDto
  ): Promise<SalarieResponseDto> {
    const salarie = await this.createSalarieUseCase.execute(createSalarieDto)
    return SalarieResponseDto.fromDomain(salarie)
  }

  @Get()
  @ApiOperation({ summary: 'Get all salaries' })
  @ApiResponse({
    status: 200,
    description: 'List of salaries',
    type: [SalarieResponseDto],
  })
  async findAll(): Promise<SalarieResponseDto[]> {
    const salaries = await this.getAllSalariesUseCase.execute()
    return salaries.map(SalarieResponseDto.fromDomain)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a salarie by ID' })
  @ApiResponse({
    status: 200,
    description: 'Salarie found',
    type: SalarieResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Salarie not found' })
  async findOne(@Param('id') id: string): Promise<SalarieResponseDto> {
    const salarie = await this.getSalarieByIdUseCase.execute(BigInt(id))
    return SalarieResponseDto.fromDomain(salarie)
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a salarie' })
  @ApiResponse({
    status: 200,
    description: 'Salarie updated successfully',
    type: SalarieResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Salarie not found' })
  async update(
    @Param('id') id: string,
    @Body() updateSalarieDto: UpdateSalarieDto
  ): Promise<SalarieResponseDto> {
    const salarie = await this.updateSalarieUseCase.execute(
      BigInt(id),
      updateSalarieDto
    )
    return SalarieResponseDto.fromDomain(salarie)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a salarie' })
  @ApiResponse({ status: 204, description: 'Salarie deleted successfully' })
  @ApiResponse({ status: 404, description: 'Salarie not found' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.deleteSalarieUseCase.execute(BigInt(id))
  }
}
