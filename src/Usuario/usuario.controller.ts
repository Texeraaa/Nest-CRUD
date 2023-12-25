import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUser.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from "uuid"
import { listaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/atualizaUser.dto";
import { UsuarioService } from "./usuario.service";

@Controller('/usuarios')
export class UsuarioController {

    constructor(
        private usuarioRepository: UsuarioRepository,
        private usuarioService: UsuarioService
        ){}

    @Post()
     async criaUsuario(@Body() userData: CriaUsuarioDTO){
        const usuarioEntity = new UsuarioEntity()
        usuarioEntity.id = uuid()
        usuarioEntity.nome = userData.nome
        usuarioEntity.email = userData.email
        usuarioEntity.senha = userData.senha

        this.usuarioService.criaUsuario(usuarioEntity);
        return { 
            usuario: new listaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'usuario criado com sucesso'
        }
    }

    @Get()
    async listarUsuarios(){
        const usuarios = await this.usuarioService.listaUsuarios();

        return usuarios
    }

    @Put('/:id')
    async atualizarUsuario(@Param('id') id: string, @Body () novosDados: AtualizaUsuarioDTO){
        const usuarioAtualizado = await this.usuarioService.atualizaUsuario(id, novosDados);
        return{
            usuario: usuarioAtualizado,
            message: 'usuario atualizado com sucesso'
        }
    }

    @Delete('/:id')
    async deletarUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.usuarioService.deletaUsuario(id);
        return{
            usuario: usuarioRemovido,
            message: 'usuario removido com sucesso'
        }
    }
}