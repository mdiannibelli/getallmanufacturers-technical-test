import { Component, input } from '@angular/core';
import { Manufacturers } from '../../interfaces/get-manufacturers.interface';

@Component({
  selector: 'single-manufacturer',
  imports: [],
  templateUrl: './single-manufacturer.component.html',
})
export class SingleManufacturerComponent {
  manufacturer = input.required<Manufacturers>();
}
