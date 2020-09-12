import { InputType, Field } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class GoogleLoginInput {
  @IsNotEmpty()
  @Field()
  token: string;
}