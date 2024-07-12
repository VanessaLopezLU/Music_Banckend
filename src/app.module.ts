import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutorModule } from './autor/autor.module';
import { PlaylistModule } from './playlist/playlist.module';
import { CancionModule } from './cancion/cancion.module';
import { GeneroModule } from './genero/genero.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { env, loadEnvFile } from 'process';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [AutorModule, GeneroModule, CancionModule, PlaylistModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
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
  
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
