import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Post])],
  providers: [PostsResolver, PostsService, UsersResolver]
})
export class PostsModule {}
