import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
import { ManufacturerService } from './manufacturers.service';
import { GetManufacturerResponse } from './interfaces/get-response.interface';
import { TransformManufacturerInterceptor } from './interceptors/transform-manufacturer.interceptor';

@Controller('manufacturers')
export class ManufacturerController {
  constructor(private readonly manufacturerService: ManufacturerService) {}

  @Get()
  @UseInterceptors(TransformManufacturerInterceptor)
  async getManufacturers(): Promise<GetManufacturerResponse> {
    const response = await this.manufacturerService.getManufacturers();

    if (response?.Results?.length) {
      return response;
    }

    throw new HttpException(
      { message: 'No manufacturers found' },
      HttpStatus.NOT_FOUND,
    );
  }
}
