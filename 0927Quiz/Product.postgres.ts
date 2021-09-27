import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Product extends BaseEntity {

    // @PrimaryGeneratedColumn("increment")
    // number!: number;

    @Column({ type: "text" })
    seller!: string;

    @Column({ type: "text" })
    name!: string;

    @Column({ type: "text" })
    detail!: string;

    @Column({ type: "integer" })
    price!: number;

    @PrimaryGeneratedColumn("uuid")
    productId!: string;

    @Column({ type: "timestamp", default:null, nullable:true})
    deletedAt!: Date;


}