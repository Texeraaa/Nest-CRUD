import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';


@Entity({ name: 'produtos' })
export class ProdutoEntity{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        name: 'usuario_id',
        length: 100,
        nullable: false,
    })
    usuarioId: string

    @Column({
        name: 'nome',
        length: 100,
        nullable: false
    })
    nome: string;

    @Column({
        name: 'valor',
        nullable: false
    })
    valor: number;

    @Column({
        name: 'quantidade',
        nullable: false,
    })
    quantidade: number;



    @CreateDateColumn({ name: 'created_at'})
    createdAt: string;
    @UpdateDateColumn({ name: 'created_at'})
    updatedAt: string;
    @DeleteDateColumn({ name: 'created_at'})
    deletedAt: string;
}