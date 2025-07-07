import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ManufacturerService } from './manufacturers.service';
import { Response } from 'express';
import { GetManufacturerResponse } from './interfaces/get-response.interface';

@Controller('manufacturers')
export class ManufacturerController {
  constructor(private readonly manufacturerService: ManufacturerService) {}

  @Get()
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
