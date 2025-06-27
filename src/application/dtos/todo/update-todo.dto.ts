import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional, IsBoolean, MaxLength } from 'class-validator'

export class UpdateTodoDto {
  @ApiProperty({
    description: 'The title of the todo',
    example: 'Learn NestJS Advanced',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  title?: string

  @ApiProperty({
    description: 'The description of the todo',
    example: 'Complete advanced NestJS concepts',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string

  @ApiProperty({
    description: 'Whether the todo is completed',
    example: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  completed?: boolean
}
