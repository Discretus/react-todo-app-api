import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  prisma = new PrismaClient();
  todo = this.prisma.todo;
}
