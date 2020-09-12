import { BaseEntity, Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { User } from './user.entity';

@ObjectType()
@Entity()
export class Note extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: string;

  @Field()
  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Field()
  @Column({ type: 'text' })
  body: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  imageURL!: string;

  @ManyToOne(() => User, user => user.notes)
  user: User;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}