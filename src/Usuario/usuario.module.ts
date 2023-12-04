import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { UniqueEmailValidator } from "./validacao/unique-email.validator";

@Module({
    controllers:[UsuarioController],
    providers:[UsuarioRepository, UniqueEmailValidator],
})

export class UsarioModule{}