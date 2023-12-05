import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class criaProdutoDTO{

    @IsNotEmpty()
    @IsString()
    nome: string;
    
    @IsNumber()
    @IsNotEmpty()
    valor: number;

    @IsNumber()
    @IsNotEmpty()
    quantidade: number;
}