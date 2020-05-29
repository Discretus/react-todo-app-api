import { Injectable, Query } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.todo.findMany();
  }

  async add(text: string) {
    const todo = await this.prisma.todo.create({
      data: {
        text: text,
      },
    });
    return todo;
  }
}
