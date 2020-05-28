import { Injectable } from '@nestjs/common';
import { Todo } from './Todo';

@Injectable()
export class TodoService {
  getTodo(): Todo {
    return {
      id     : '1',
      text   : 'Buy something',
      toggled: true,
    };
  }
}
