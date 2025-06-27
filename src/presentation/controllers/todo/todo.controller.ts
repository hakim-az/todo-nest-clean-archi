import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger'
import { CreateTodoDto } from '../../../application/dtos/todo/create-todo.dto'
import { UpdateTodoDto } from '../../../application/dtos/update-todo.dto'
import { TodoResponseDto } from '../../../application/dtos/todo-response.dto'
import { CreateTodoUseCase } from '../../../application/use-cases/todo/create-todo.use-case'
import { GetAllTodosUseCase } from '../../../application/use-cases/get-all-todos.use-case'
import { GetTodoByIdUseCase } from '../../../application/use-cases/get-todo-by-id.use-case'
import { UpdateTodoUseCase } from '../../../application/use-cases/todo/update-todo.use-case'
import { DeleteTodoUseCase } from '../../../application/use-cases/delete-todo.use-case'
import { GetTodosByStatusUseCase } from '../../../application/use-cases/get-todos-by-status.use-case'

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly getAllTodosUseCase: GetAllTodosUseCase,
    private readonly getTodoByIdUseCase: GetTodoByIdUseCase,
    private readonly updateTodoUseCase: UpdateTodoUseCase,
    private readonly deleteTodoUseCase: DeleteTodoUseCase,
    private readonly getTodosByStatusUseCase: GetTodosByStatusUseCase
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new todo' })
  @ApiResponse({
    status: 201,
    description: 'Todo created successfully',
    type: TodoResponseDto,
  })
  async create(@Body() createTodoDto: CreateTodoDto): Promise<TodoResponseDto> {
    const todo = await this.createTodoUseCase.execute(createTodoDto)
    return TodoResponseDto.fromDomain(todo)
  }

  @Get()
  @ApiOperation({ summary: 'Get all todos or filter by status' })
  @ApiQuery({
    name: 'completed',
    required: false,
    type: Boolean,
    description: 'Filter todos by completion status',
  })
  @ApiResponse({
    status: 200,
    description: 'List of todos',
    type: [TodoResponseDto],
  })
  async findAll(
    @Query('completed') completed?: string
  ): Promise<TodoResponseDto[]> {
    let todos

    if (completed !== undefined) {
      const isCompleted = completed === 'true'
      todos = await this.getTodosByStatusUseCase.execute(isCompleted)
    } else {
      todos = await this.getAllTodosUseCase.execute()
    }

    return todos.map(TodoResponseDto.fromDomain)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a todo by ID' })
  @ApiResponse({
    status: 200,
    description: 'Todo found',
    type: TodoResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Todo not found' })
  async findOne(@Param('id') id: string): Promise<TodoResponseDto> {
    const todo = await this.getTodoByIdUseCase.execute(id)
    return TodoResponseDto.fromDomain(todo)
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a todo' })
  @ApiResponse({
    status: 200,
    description: 'Todo updated successfully',
    type: TodoResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Todo not found' })
  async update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto
  ): Promise<TodoResponseDto> {
    const todo = await this.updateTodoUseCase.execute(id, updateTodoDto)
    return TodoResponseDto.fromDomain(todo)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a todo' })
  @ApiResponse({ status: 204, description: 'Todo deleted successfully' })
  @ApiResponse({ status: 404, description: 'Todo not found' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.deleteTodoUseCase.execute(id)
  }
}
