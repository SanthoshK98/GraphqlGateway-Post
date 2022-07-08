import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Post } from "./entities/post.entity";
import { User } from "./entities/user.entity";
import { PostsService } from "./posts.service";

@Resolver((of)=>User)
export class UsersResolver {
    constructor(private readonly postsService:PostsService){}

    @ResolveField((of)=>[Post])
    public posts(@Parent() user:User):Promise<Post[]>{
        return this.postsService.forAuthor(user.id)
    }
}