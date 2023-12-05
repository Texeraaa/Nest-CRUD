import { Module } from '@nestjs/common';
import { UsarioModule } from './Usuario/usuario.module';
import { ProdutoModule } from './Produto/produto.module';

@Module({
  imports: [UsarioModule, ProdutoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
