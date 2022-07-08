import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@ObjectType()
@Directive('@key(fields:"id")')
@Entity()
export class Post {
    @Field((type)=>ID)
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Field()
    @Column()
    firstName: string
    @Field()
    @Column()
    lastName: string
    @Field()
    @Column()
    designation: string
    @Field()
    @Column()
    city: string
    @Field()
    @Column()
    authorId: string
    @Field((type)=> User)
    user?: User


}