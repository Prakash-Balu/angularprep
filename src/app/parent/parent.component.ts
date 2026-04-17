import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  changeDetectRefOption = "markForCheck"; // detectChanges, markForCheck, detach, reattach
  //DetectChanges
  aquaticCreatures = ['shark', 'dolphin', 'octopus'];
  
  addAquaticCreature(newAquaticCreature:any) {
    this.aquaticCreatures.push(newAquaticCreature);
  }

  //MarkForCheck
  aquaticCreatures1 = new BehaviorSubject<string[]>(['shark', 'dolphin', 'octopus']);

  
  addAquaticCreature1(newCreature: string) {
    const current = this.aquaticCreatures1.value;
    this.aquaticCreatures1.next([...current, newCreature]);
  }
}
