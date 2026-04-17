import { Component, ViewChild } from '@angular/core';
import { GrandchildComponent } from '../grandchild/grandchild.component';

@Component({
  selector: 'app-child',
  imports: [GrandchildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @ViewChild(GrandchildComponent) grandchild!: GrandchildComponent;
}
