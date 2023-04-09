import { Module } from '@nestjs/common';
// import { join } from 'path';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
  //   GraphQLModule.forRoot({
  //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  //   driver: ApolloDriver,
  //   isGlobal: true,
  // }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGO_URI'),
    })
  }),
  ConfigModule.forRoot()
],
})
export class AppModule {}
