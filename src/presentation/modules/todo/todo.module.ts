import { Module } from '@nestjs/common'
import { TodoController } from '../../controllers/todo/todo.controller'
import { CreateTodoUseCase } from '../../../application/use-cases/todo/create-todo.use-case'
import { GetAllTodosUseCase } from '../../../application/use-cases/get-all-todos.use-case'
import { GetTodoByIdUseCase } from '../../../application/use-cases/get-todo-by-id.use-case'
import { UpdateTodoUseCase } from '../../../application/use-cases/todo/update-todo.use-case'
import { DeleteTodoUseCase } from '../../../application/use-cases/delete-todo.use-case'
import { GetTodosByStatusUseCase } from '../../../application/use-cases/get-todos-by-status.use-case'
import { PrismaTodoRepository } from '../../../infrastructure/repositories/todo/prisma-todo.repository'
import { PrismaService } from '../../../infrastructure/database/prisma.service'
import { TODO_REPOSITORY } from '../../../domain/contracts/todo-repository.interface'

@Module({
  controllers: [TodoController],
  providers: [
    PrismaService,
    {
      provide: TODO_REPOSITORY,
      useClass: PrismaTodoRepository,
    },
    CreateTodoUseCase,
    GetAllTodosUseCase,
    GetTodoByIdUseCase,
    UpdateTodoUseCase,
    DeleteTodoUseCase,
    GetTodosByStatusUseCase,
  ],
})
export class TodoModule {}
