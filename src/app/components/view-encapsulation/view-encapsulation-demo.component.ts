import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-view-encapsulation-demo',
  imports: [HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './view-encapsulation-demo.component.html',
  styleUrl: './view-encapsulation-demo.component.scss'
})
export class ViewEncapsulationDemoComponent {}
