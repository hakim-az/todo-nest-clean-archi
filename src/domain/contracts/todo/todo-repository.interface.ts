import { Todo } from '../../entities/todo/todo.entity'

export interface TodoRepository {
  findAll(): Promise<Todo[]>
  findById(id: string): Promise<Todo | null>
  create(todo: Todo): Promise<Todo>
  update(id: string, todo: Partial<Todo>): Promise<Todo | null>
  delete(id: string): Promise<boolean>
  findByCompleted(completed: boolean): Promise<Todo[]>
}

export const TODO_REPOSITORY = Symbol('TodoRepository')
