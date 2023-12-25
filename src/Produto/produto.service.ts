import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { ProdutoEntity } from "./produto.entity"
import { Repository } from "typeorm"
import { listaProdutoDTO } from "./dto/listaProduto.dto"
import { AtualizaProdutoDTO } from "./dto/atualizaProduto.dto"

@Injectable()
export class ProdutoService{
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly produtoRepository: Repository<ProdutoEntity>
    ){}

    async criaProduto(ProdutoEntity: ProdutoEntity){
        await this.produtoRepository.save(ProdutoEntity)
    }

    async listaProdutos(){
        const produtos = await this.produtoRepository.find()
        const listaProdutos = produtos.map((produto) => new listaProdutoDTO(produto.id, produto.nome, produto.descricao, produto.quantidade, produto.valor))
        return listaProdutos
    }

    async atualizaProduto(id: string, ProdutoEntity: AtualizaProdutoDTO){
        await this.produtoRepository.update(id, ProdutoEntity)
    }

    async deletaProduto(id: string){
        await this.produtoRepository.delete(id)
      
    }
}  