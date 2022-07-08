import { Args, Mutation, Parent, Query, ResolveField, Resolver, ResolveReference } from '@nestjs/graphql';
import { PostCreateDTO } from './dto/create-post-input';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';
import { PostsService } from './posts.service';

@Resolver((of)=> Post)
export class PostsResolver {
    constructor(private postsService:PostsService){}

    @Query(()=>[Post], {name:"getAllPosts"})
    findAll(){
        return this.postsService.findAll()
    }

    @Query(()=>Post, {name:"post"})
    findOne(@Args('id') id: string){
        return this.postsService.findOne(id)
    }

    @Mutation(()=>Post, {name:"createPost"})
    create(@Args('post') post: PostCreateDTO){
        return this.postsService.create(post)
    }

    @ResolveReference()
    user(@Parent() post:Post):any{
        return {__typename:'User',id:post.authorId}
    }

}
