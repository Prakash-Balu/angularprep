import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements AfterViewInit {
  
  @ViewChild(ChildComponent) child!: ChildComponent;
  
  ngAfterViewInit() {
    // ViewChild is available here, not in ngOnInit
  }

  send() {
    this.child.grandchild.receive('Hello from Parent!');
  }

}
