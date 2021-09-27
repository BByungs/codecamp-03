import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column({type: "timestamp", default: null, nullable: true }) 
  // 시간이 들어가는애라 timestamp
  // 삭제 못하니까 default: null,
  // nullable:true는 null일수 있으니까 true
  deletedAt? : Date;
}
