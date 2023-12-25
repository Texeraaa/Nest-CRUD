export class listaProdutoDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly descricao: string,
        readonly quantidade: number,
        readonly valor: number,
    ){}
}