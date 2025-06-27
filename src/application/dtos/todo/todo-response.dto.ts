import { ApiProperty } from '@nestjs/swagger'
import { Todo } from '../../../domain/entities/todo/todo.entity'

export class TodoResponseDto {
  @ApiProperty({ example: 'cuid123' })
  id: string

  @ApiProperty({ example: 'Learn NestJS' })
  title: string

  @ApiProperty({ example: 'Complete the NestJS tutorial', nullable: true })
  description: string | null

  @ApiProperty({ example: false })
  completed: boolean

  @ApiProperty({ example: '2023-12-01T10:00:00.000Z' })
  createdAt: Date

  @ApiProperty({ example: '2023-12-01T10:00:00.000Z' })
  updatedAt: Date

  static fromDomain(todo: Todo): TodoResponseDto {
    return {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    }
  }
}
