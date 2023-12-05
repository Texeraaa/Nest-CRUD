import { Injectable } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";

@Injectable()
export class ProdutoRepository{
    private produtos: ProdutoEntity[] = []

    salvar(produtos: ProdutoEntity){
        
        this.produtos.push(produtos)
    }

    async listar(){
        return this.produtos
    }
}