import { IsNotEmpty, IsNumber, IsString, IsUUID, Min } from "class-validator";

export class AtualizaProdutoDTO{
    @IsUUID(undefined, {message: 'ID de usuario inválido'})
    usuarioId: string

    @IsNotEmpty({message: 'nome do produto não pode ser vazio'})
    @IsString({message: 'campo nome deve ser do tipo string'})
    nome: string;
    
    @IsNotEmpty({message: 'valor do produto não pode ser vazio'})
    @IsNumber({maxDecimalPlaces: 2, allowNaN:false, allowInfinity: false})
    @Min(1, {message: 'O valor deve ser maior que zero'})
    valor: number;

    @IsNumber({allowInfinity: false,allowNaN:false,maxDecimalPlaces:0})
    @IsNotEmpty({message: 'quantidade não pode ser vazio'})
    @Min(1, {message: 'A quantidade deve ser maior que zero'})
    quantidade: number;

    @IsString({message: 'campo descricao deve ser do tipo string'})
    @IsNotEmpty({message: 'descricao não pode ser vazio'})
    descricao: string;
}