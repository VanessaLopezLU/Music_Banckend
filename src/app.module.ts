import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutorModule } from './autor/autor.module';
import { PlaylistModule } from './playlist/playlist.module';
import { CancionModule } from './cancion/cancion.module';
import { GeneroModule } from './genero/genero.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports:[
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,'..', 'templates'),
      serveRoot:'/public/'
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        connectTimeout: 40000,
        autoLoadEntities: true
      }),
      
      inject: [ConfigService],
    }),
    AutorModule, GeneroModule, CancionModule, PlaylistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
