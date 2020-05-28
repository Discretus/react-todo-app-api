import { Controller, Get } from '@nestjs/common';
import { Todo } from './Todo';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {
  }

  @Get()
  getTodo(): Todo {
    return this.todoService.getTodo();
  }
}
