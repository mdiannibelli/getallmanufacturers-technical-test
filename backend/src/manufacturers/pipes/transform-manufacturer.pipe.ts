import { PipeTransform, Injectable } from '@nestjs/common';
import {
  GetManufacturerResponse,
  Result,
} from '../interfaces/get-response.interface';
import {
  TransformedResponse,
  TransformedResult,
} from '../interfaces/transformed-response.interface';

@Injectable()
export class TransformManufacturerPipe implements PipeTransform {
  private transformCountry(country: string): string {
    return country
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace(/\(usa\)/i, '')
      .replace(/\(uk\)/i, '')
      .trim();
  }

  transform(response: GetManufacturerResponse): TransformedResponse {
    return {
      count: response.Count,
      message: response.Message,
      searchCriteria: response.SearchCriteria,
      results: response.Results.map((res) => this.transformResult(res)),
    };
  }

  private transformResult(result: Result): TransformedResult {
    return {
      country: this.transformCountry(result.Country),
      commonName: result.Mfr_CommonName,
      id: result.Mfr_ID,
      name: result.Mfr_Name,
      vehicleTypes: result.VehicleTypes.map((vehicleType) => ({
        isPrimary: vehicleType.IsPrimary,
        name: vehicleType.Name,
      })),
    };
  }
}
