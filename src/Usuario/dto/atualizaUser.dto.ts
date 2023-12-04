import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { UniqueEmail } from "../validacao/unique-email.validator";

export class AtualizaUsuarioDTO{

    @IsNotEmpty({message: 'O campo nome não pode ser vazio'})
    @IsOptional()
    nome: string;

    @IsEmail(undefined,{message: 'email inserido não é valido'})
    @UniqueEmail({message: 'Email já cadastrado'})
    @IsOptional()
    email: string;

    @MinLength(6, {message: 'Senha deve ter no minimo 6 caracteres'})
    @IsNotEmpty({message: 'O campo senha não pode ser vazio'})
    @IsOptional()
    senha: string;
}