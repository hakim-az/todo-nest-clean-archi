import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import {
  TodoRepository,
  TODO_REPOSITORY,
} from '../../../domain/contracts/todo-repository.interface'

@Injectable()
export class DeleteTodoUseCase {
  constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepository: TodoRepository
  ) {}

  async execute(id: string): Promise<void> {
    const todo = await this.todoRepository.findById(id)
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`)
    }

    const deleted = await this.todoRepository.delete(id)
    if (!deleted) {
      throw new NotFoundException(`Todo with ID ${id} not found`)
    }
  }
}
