import { Module } from "@nestjs/common";
import { ProdutoController } from "./Controller/produto.controller";
import { ProdutoRepository } from "./Repository/produto.repository";

@Module({
    controllers: [ProdutoController],
    providers: [ProdutoRepository],
})

export class ProdutoModule{}