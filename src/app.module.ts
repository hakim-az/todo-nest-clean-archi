import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TodoModule } from './presentation/modules/todo/todo.module'
import { SalarieModule } from './presentation/modules/salarie/salarie.module'

@Module({
  imports: [TodoModule, SalarieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
