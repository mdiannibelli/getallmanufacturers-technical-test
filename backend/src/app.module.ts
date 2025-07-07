import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManufacturersModule } from './manufacturers/manufacturers.module';

@Module({
  imports: [ManufacturersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
