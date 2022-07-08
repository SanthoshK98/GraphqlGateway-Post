import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class PostCreateDTO {
    @Field()
    firstName: string
    @Field()
    lastName: string
    @Field()
    designation: string
    @Field()
    city: string
}