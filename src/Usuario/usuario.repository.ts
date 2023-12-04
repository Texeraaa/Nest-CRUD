import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioRepository{
    private usuarios: UsuarioEntity[] = [];

    salvar(usuario: UsuarioEntity){
        this.usuarios.push(usuario);
    }

    async listar(){
        return this.usuarios;
    }

    async existeComEmail(email: string){
        const possivelUser = await this.usuarios.find(
            usuario => usuario.email === email
            );
        return possivelUser !== undefined;  //true ou false
    }

    private buscaPorId(id: string){
        const possivelUser = this.usuarios.find(
            usuario => usuario.id === id
        )

        if(!possivelUser){
            throw new Error('Usuario não encontrado');
        }

        return possivelUser;
    }

    async atualizar(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>){
        const user = this.buscaPorId(id)

        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if(chave === 'id') throw new Error('Você não pode alterar o id');

            user[chave] = valor;  
            return user;
        })
    }

    async deletar(id: string){
       const user = this.buscaPorId(id)
       this.usuarios = this.usuarios.filter(
           usuario => usuario.id !== user.id
        )
    }
}