import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutorModule } from './autor/autor.module';
import { PlaylistModule } from './playlist/playlist.module';
import { CancionModule } from './cancion/cancion.module';
import { GeneroModule } from './genero/genero.module';
import { AutorModule } from './autor/autor.module';

@Module({
  imports: [AutorModule, GeneroModule, CancionModule, PlaylistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
