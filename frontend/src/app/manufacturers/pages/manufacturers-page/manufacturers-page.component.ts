import {
  AfterViewInit,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ManufacturerService } from '../../services/manufacturer.service';
import { Manufacturers } from '../../interfaces/get-manufacturers.interface';
import { catchError } from 'rxjs';
import { SingleManufacturerComponent } from '../../components/single-manufacturer/single-manufacturer.component';

@Component({
  selector: 'manufacturers-page',
  imports: [SingleManufacturerComponent],
  templateUrl: './manufacturers-page.component.html',
})
export class ManufacturersPageComponent implements AfterViewInit {
  private manufacturerService = inject(ManufacturerService);

  private _manufacturers = signal<Manufacturers[] | null>(null);
  private _loading = signal<boolean>(false);
  private _error = signal<string | null>(null);
  private _hasError = signal<boolean>(false);

  manufacturers = computed(() => this._manufacturers());
  isLoading = computed(() => this._loading());
  error = computed(() => this._error());
  hasError = computed(() => !!this._hasError());

  ngAfterViewInit(): void {
    this.loadManufacturers();
  }

  private loadManufacturers(): void {
    this._loading.set(true);
    this._hasError.set(false);
    this._error.set(null);

    this.manufacturerService
      .getManufacturers()
      .pipe(
        catchError((error) => {
          console.error('Error loading manufacturers:', error);
          this._error.set(error);
          this._hasError.set(true);
          this._loading.set(false);
          throw error;
        })
      )
      .subscribe({
        next: (manufacturers) => {
          this._manufacturers.set(manufacturers);
          this._loading.set(false);
        },
      });
  }
}
