import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  age?: number;

  @Field({ nullable: true })
  @IsOptional()
  isSubscribe?: boolean;
}
