import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './posts/posts.module';
import {join} from 'path'
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './posts/entities/user.entity';

@Module({
  imports: [PostsModule,GraphQLModule.forRoot<ApolloFederationDriverConfig>({
    driver: ApolloFederationDriver,
    autoSchemaFile: join(process.cwd(), 'src/graphql-schema-gql'),
    buildSchemaOptions:{
      orphanedTypes: [User]
    }
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Koneti@98',
    database: 'post',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
  })
],
  controllers: [],
  providers: [],
})
export class AppModule {}
