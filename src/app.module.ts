import { Module } from '@nestjs/common';
import { UsarioModule } from './Usuario/usuario.module';
import { ProdutoModule } from './Produto/produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsarioModule,
    ProdutoModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
