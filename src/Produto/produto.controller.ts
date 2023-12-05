import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";
import { v4 as uuid } from "uuid"
import { ProdutoRepository } from "./produto.repository";
import { listaProdutoDTO } from "./dto/listaProduto.dto";
import { criaProdutoDTO } from "./dto/criaProduto.dto";

@Controller('/produto')
export class ProdutoController{

    constructor(private produtoRepository: ProdutoRepository){}


    @Post()
    async criaProduto(@Body() productData: criaProdutoDTO){
        console.log('aa');
        const produtoEntity = new ProdutoEntity()

        produtoEntity.id = uuid()
        produtoEntity.nome = productData.nome
        produtoEntity.valor = productData.valor
        produtoEntity.quantidade = productData.quantidade

        this.produtoRepository.salvar(produtoEntity)
        return{
            produto: new listaProdutoDTO(produtoEntity.id, produtoEntity.nome, produtoEntity.valor),
            message: 'produto criado com sucesso' 
        }
    }

    @Get()
    async listarProdutos(){
        const produtosSalvos = await this.produtoRepository.listar()
        const produtosListados = produtosSalvos.map(
            produto => new listaProdutoDTO(
                produto.id,
                produto.nome,
                produto.valor
            )
        )
        return produtosListados
    }
}