import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";
import { v4 as uuid } from "uuid"
import { ProdutoRepository } from "./produto.repository";
import { listaProdutoDTO } from "./dto/listaProduto.dto";
import { criaProdutoDTO } from "./dto/criaProduto.dto";
import { ProdutoService } from "./produto.service";
import { AtualizaProdutoDTO } from "./dto/atualizaProduto.dto";

@Controller('/produto')
export class ProdutoController{

    constructor(private produtoService: ProdutoService){}

    @Post()
    async criaProduto(@Body() productData: criaProdutoDTO){
        const produtoEntity = new ProdutoEntity()

        produtoEntity.id = uuid()
        produtoEntity.usuarioId = productData.usuarioId
        produtoEntity.nome = productData.nome
        produtoEntity.valor = productData.valor
        produtoEntity.quantidade = productData.quantidade
        produtoEntity.descricao = productData.descricao

        this.produtoService.criaProduto(produtoEntity)
        return{
            produto: new listaProdutoDTO(produtoEntity.id, produtoEntity.nome, produtoEntity.descricao, produtoEntity.quantidade, produtoEntity.valor),
            message: 'produto criado com sucesso' 
        }
    }

    @Get()
    async listarProdutos(){
       return this.produtoService.listaProdutos()
    }

    @Put('/:id')
    async atualizarProduto(
        @Param('id') id:string,
        @Body() dadosProduto: AtualizaProdutoDTO
        ){
        const produtoAtualizado = await this.produtoService.atualizaProduto(id, dadosProduto)

        return{
            message: 'produto atualizado com sucesso',
            produto: produtoAtualizado,
        }
    }
    
    @Delete('/:id')
    async deletaProduto(@Param('id') id:string){
        const produtoRemovido = await this.produtoService.deletaProduto(id)

        return{
            message: 'produto removido com sucesso',
            produto: produtoRemovido,
        }
    }
}