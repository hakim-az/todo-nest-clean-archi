import { Inject, Injectable } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '../../../domain/entities/todo/todo.entity'
import {
  TodoRepository,
  TODO_REPOSITORY,
} from '../../../domain/contracts/todo/todo-repository.interface'
import { CreateTodoDto } from '../../dtos/todo/create-todo.dto'

@Injectable()
export class CreateTodoUseCase {
  constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepository: TodoRepository
  ) {}

  async execute(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = Todo.create(
      uuidv4(),
      createTodoDto.title,
      createTodoDto.description
    )

    return await this.todoRepository.create(todo)
  }
}
