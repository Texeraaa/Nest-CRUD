import { Module } from '@nestjs/common';
import { UsarioModule } from './Usuario/usuario.module';

@Module({
  imports: [UsarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
