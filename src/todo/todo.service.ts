import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const todos = await this.prisma.todo.findMany();
    return todos.sort((a, b) => a.id - b.id);
  }

  async add(text: string) {
    return await this.prisma.todo.create({
      data: {
        text: text,
      },
    });
  }

  async delete(id: number) {
    try {
      return await this.prisma.todo.delete({
        where: {
          id: id,
        },
      });
    } catch {
      return {
        type: 'Error',
        message: 'Invalid id',
      };
    }
  }

  async toggle(id: number) {
    try {
      const { toggled } = await this.prisma.todo.findOne({
        where: {
          id: id,
        },
      });
      return await this.prisma.todo.update({
        where: {
          id: id,
        },
        data: {
          toggled: !toggled,
        },
      });
    } catch {
      return {
        type: 'Error',
        message: 'Invalid id',
      };
    }
  }
}
