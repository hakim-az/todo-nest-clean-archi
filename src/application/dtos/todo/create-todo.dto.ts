import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator'

export class CreateTodoDto {
  @ApiProperty({
    description: 'The title of the todo',
    example: 'Learn NestJS',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title: string

  @ApiProperty({
    description: 'The description of the todo',
    example: 'Complete the NestJS tutorial',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string
}
