import { BaseEntity, Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Note } from './note.entity';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: string;

  @Field()
  @Column({ type: 'varchar', length: 50 })
  firstName: string;

  @Field()
  @Column({ type: 'varchar', length: 50 })
  lastName: string;

  @Field()
  @Column({ type: 'text' })
  email: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  imageURL!: string;

  @Column({ type: 'text', nullable: true })
  password!: string;

  @OneToMany(() => Note, note => note.user)
  notes: Array<Note>

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}