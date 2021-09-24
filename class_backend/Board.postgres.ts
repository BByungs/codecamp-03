import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// table은 클래스로 만듬
// BaseEntity를 상속 받아야해서 이렇게 써줬음
@Entity()
// @를 데코레이터라고 함
// 밑에 있는 클래스로만 쓰면 안되고 DB로 인식하기위해 @Entity를 써줘야함

// 밑에있는 코드가 읽힐때 DB에 data저장됨
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  // number는 구분될수있는것중에 하나임 (키값)
  // 그래서 PK라고 부름

  // @PrimaryGeneratedColumn("increment")
  // 자동으로 1씩 증가하는 넘버를 뜻함
  number!: number;

  // 각각의 목록의 이름이기 때문에 Column써줌
  @Column({ type: "text" })
  // 각각의 콜롬마다 타입이 존재하는데
  // stirng , number 이런게 아니라
  // text , integer 이렇게 부름
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "integer" })
  age!: number;
}
