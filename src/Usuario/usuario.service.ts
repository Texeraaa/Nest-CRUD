import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { listaUsuarioDTO } from "./dto/listaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { Repository } from "typeorm";
import { AtualizaUsuarioDTO } from "./dto/atualizaUser.dto";

@Injectable()

export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ){}

    async criaUsuario(UsuarioEntity: UsuarioEntity){
        await this.usuarioRepository.save(UsuarioEntity)
    }

    async listaUsuarios(){
        const usuariosSalvos = await this.usuarioRepository.find()
        const usuariosLista = usuariosSalvos.map((usuario) => new listaUsuarioDTO(usuario.id,usuario.nome))
        return usuariosLista
    }

    async atualizaUsuario(id: string, UsuarioEntity: AtualizaUsuarioDTO){
        this.usuarioRepository.update(id, UsuarioEntity)
    }

    async deletaUsuario(id: string){
        this.usuarioRepository.delete(id)
    }
}
