import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GetManufacturerResponse } from './interfaces/get-response.interface';
import { firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class ManufacturerService {
  private readonly baseUrl =
    'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';

  constructor(private readonly httpService: HttpService) {}

  async getManufacturers(): Promise<GetManufacturerResponse> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<GetManufacturerResponse>(this.baseUrl),
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      const message = axiosError?.message || 'Unknown error occurred';

      throw new InternalServerErrorException(
        `Failed to fetch manufacturers: ${message}`,
      );
    }
  }
}
