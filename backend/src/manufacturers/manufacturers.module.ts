import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ManufacturerService } from './manufacturers.service';
import { ManufacturerController } from './manufacturer.controller';
import { TransformManufacturerPipe } from './pipes/transform-manufacturer.pipe';
import { TransformManufacturerInterceptor } from './interceptors/transform-manufacturer.interceptor';

@Module({
  imports: [HttpModule],
  controllers: [ManufacturerController],
  providers: [
    ManufacturerService,
    TransformManufacturerPipe,
    TransformManufacturerInterceptor,
  ],
  exports: [ManufacturerService],
})
export class ManufacturersModule {}
