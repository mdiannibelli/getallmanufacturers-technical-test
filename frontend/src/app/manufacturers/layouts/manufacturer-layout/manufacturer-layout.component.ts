import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'manufacturer-layout',
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './manufacturer-layout.component.html',
})
export class ManufacturerLayoutComponent {}
