import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecase-proxy.module';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [TodoController],
})
export class ControllersModule { }
