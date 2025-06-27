import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Todo } from '../../../domain/entities/todo/todo.entity'
import {
  TodoRepository,
  TODO_REPOSITORY,
} from '../../../domain/contracts/todo-repository.interface'
import { UpdateTodoDto } from '../../dtos/todo/update-todo.dto'

@Injectable()
export class UpdateTodoUseCase {
  constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepository: TodoRepository
  ) {}

  async execute(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const existingTodo = await this.todoRepository.findById(id)
    if (!existingTodo) {
      throw new NotFoundException(`Todo with ID ${id} not found`)
    }

    const updatedTodo = await this.todoRepository.update(id, {
      title: updateTodoDto.title,
      description: updateTodoDto.description,
      completed: updateTodoDto.completed,
      updatedAt: new Date(),
    })

    if (!updatedTodo) {
      throw new NotFoundException(`Todo with ID ${id} not found`)
    }

    return updatedTodo
  }
}
