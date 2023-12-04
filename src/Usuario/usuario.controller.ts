import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUser.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from "uuid"
import { listaUsuarioDTO } from "./dto/listaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository){}

    @Post()
     async criaUsuario(@Body() userData: CriaUsuarioDTO){
        const usuarioEntity = new UsuarioEntity()
        usuarioEntity.id = uuid()
        usuarioEntity.nome = userData.nome
        usuarioEntity.email = userData.email
        usuarioEntity.senha = userData.senha

        this.usuarioRepository.salvar(usuarioEntity);
        return { 
            usuario: new listaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'usuario criado com sucesso'
        }
    }

    @Get()
    async listarUsuarios(){
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosListas = usuariosSalvos.map(
            usuario => new listaUsuarioDTO(
                usuario.id,
                usuario.email
            )
        )
        return usuariosListas
    }
}