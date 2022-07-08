import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostCreateDTO } from './dto/create-post-input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Post) private postRepository:Repository<Post>){}

    async findAll():Promise<Post[]>{
        return this.postRepository.find()
    }

    async findOne(id: string):Promise<Post>{
        return this.postRepository.findOneBy({id})
    }

    async create(post:PostCreateDTO):Promise<Post>{
        let postCreate = this.postRepository.create(post)
        return this.postRepository.save(postCreate)
    }

    async forAuthor(id: string){
        return await this.postRepository.findBy({id})
    }
}
