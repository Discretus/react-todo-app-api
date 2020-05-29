import {
  Controller,
  Get,
  Post,
  Query,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
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

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.delete(id);
  }

  @Post(':id')
  toggle(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.toggle(id);
  }
}
