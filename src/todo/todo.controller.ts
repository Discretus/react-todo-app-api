import { Controller, Get, Post, Query } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll() {
    return this.todoService.getAll();
  }

  @Post()
  add(@Query('text') text: string) {
    return this.todoService.add(text);
  }
}
