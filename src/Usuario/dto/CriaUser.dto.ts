import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { UniqueEmail } from "../validacao/unique-email.validator";

export class CriaUsuarioDTO{

    @IsNotEmpty({message: 'O campo nome não pode ser vazio'})
    nome: string;

    @IsEmail(undefined,{message: 'email inserido não é valido'})
    @UniqueEmail({message: 'Email já cadastrado'})
    email: string;

    @MinLength(6, {message: 'Senha deve ter no minimo 6 caracteres'})
    @IsNotEmpty({message: 'O campo senha não pode ser vazio'})
    senha: string;
}