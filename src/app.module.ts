import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';

@Module({
  imports: [EnvironmentConfigModule, TypeOrmConfigModule, LoggerModule, ExceptionsModule, RepositoriesModule, ControllersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
