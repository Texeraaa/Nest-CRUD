import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { UniqueEmailValidator } from "./validacao/unique-email.validator";
import { UsuarioService } from "./usuario.service";
import { UsuarioEntity } from "./usuario.entity";

@Module({
    imports:[TypeOrmModule.forFeature([UsuarioEntity])],
    controllers:[UsuarioController],
    providers:[UsuarioService, UsuarioRepository, UniqueEmailValidator],
})

export class UsarioModule{}