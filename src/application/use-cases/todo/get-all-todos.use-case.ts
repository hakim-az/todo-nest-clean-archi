import { Inject, Injectable } from '@nestjs/common'
import { Todo } from '../../../domain/entities/todo/todo.entity'
import {
  TodoRepository,
  TODO_REPOSITORY,
} from '../../../domain/contracts/todo-repository.interface'

@Injectable()
export class GetAllTodosUseCase {
  constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepository: TodoRepository
  ) {}

  async execute(): Promise<Todo[]> {
    return await this.todoRepository.findAll()
  }
}
