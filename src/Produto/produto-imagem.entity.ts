import { Entity, Column } from "typeorm"


@Entity('produto_imagens')
export class ProdutoImagemEntity{
    @Column({
        name: 'url',
        length: 100,
        nullable: false,
    })
    url: string

    @Column({
        name: 'descricao',
        length: 100,
        nullable: false
    })
    descricao: string
}