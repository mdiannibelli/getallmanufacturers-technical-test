import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ManufacturerService } from './manufacturers.service';
import { ManufacturerController } from './manufacturer.controller';

@Module({
  imports: [HttpModule],
  controllers: [ManufacturerController],
  providers: [ManufacturerService],
  exports: [ManufacturerService],
})
export class ManufacturersModule {}
