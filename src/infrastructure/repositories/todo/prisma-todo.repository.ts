import { Injectable } from '@nestjs/common'
import { Todo } from '../../../domain/entities/todo/todo.entity'
import { TodoRepository } from '../../../domain/contracts/todo-repository.interface'
import { PrismaService } from '../../database/prisma.service'

@Injectable()
export class PrismaTodoRepository implements TodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Todo[]> {
    const todos = await this.prisma.todo.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return todos.map(this.mapToDomain)
  }

  async findById(id: string): Promise<Todo | null> {
    const todo = await this.prisma.todo.findUnique({
      where: { id },
    })

    return todo ? this.mapToDomain(todo) : null
  }

  async create(todo: Todo): Promise<Todo> {
    const createdTodo = await this.prisma.todo.create({
      data: {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        completed: todo.completed,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt,
      },
    })

    return this.mapToDomain(createdTodo)
  }

  async update(id: string, todo: Partial<Todo>): Promise<Todo | null> {
    try {
      const updatedTodo = await this.prisma.todo.update({
        where: { id },
        data: {
          title: todo.title,
          description: todo.description,
          completed: todo.completed,
          updatedAt: todo.updatedAt || new Date(),
        },
      })

      return this.mapToDomain(updatedTodo)
    } catch (error) {
      return null
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.todo.delete({
        where: { id },
      })
      return true
    } catch (error) {
      return false
    }
  }

  async findByCompleted(completed: boolean): Promise<Todo[]> {
    const todos = await this.prisma.todo.findMany({
      where: { completed },
      orderBy: { createdAt: 'desc' },
    })

    return todos.map(this.mapToDomain)
  }

  private mapToDomain(prismaModel: any): Todo {
    return new Todo(
      prismaModel.id,
      prismaModel.title,
      prismaModel.description,
      prismaModel.completed,
      prismaModel.createdAt,
      prismaModel.updatedAt
    )
  }
}
