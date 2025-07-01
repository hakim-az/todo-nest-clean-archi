import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Todo } from '../../../domain/entities/todo/todo.entity'
import {
  TodoRepository,
  TODO_REPOSITORY,
} from '../../../domain/contracts/todo/todo-repository.interface'

@Injectable()
export class GetTodoByIdUseCase {
  constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepository: TodoRepository
  ) {}

  async execute(id: string): Promise<Todo> {
    const todo = await this.todoRepository.findById(id)
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`)
    }
    return todo
  }
}
