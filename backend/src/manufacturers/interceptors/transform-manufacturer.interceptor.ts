import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransformManufacturerPipe } from '../pipes/transform-manufacturer.pipe';
import { GetManufacturerResponse } from '../interfaces/get-response.interface';

@Injectable()
export class TransformManufacturerInterceptor implements NestInterceptor {
  constructor(
    private readonly transformManufacturerPipe: TransformManufacturerPipe,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: GetManufacturerResponse) => {
        if (!data || !data.Results) {
          return data;
        }

        return this.transformManufacturerPipe.transform(data);
      }),
    );
  }
}
