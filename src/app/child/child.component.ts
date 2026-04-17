import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  changeDetectRefOption = "markForCheck"; // detectChanges, markForCheck, detach, reattach
  //DetectChanges
  @Input() data!: string[];

  constructor(private cd: ChangeDetectorRef) {}

  refresh() {
    this.cd.detectChanges();
  }

  //MarkForCheck
  @Input() data1!: Observable<string[]>;
  aquaticCreatures: string[] = [];
  ngOnInit(): void {

    if(this.changeDetectRefOption === 'markForCheck' && this.data1) {
      this.data1.subscribe(newAquaticCreature => {
        this.aquaticCreatures = [...this.aquaticCreatures, ...newAquaticCreature];
        this.cd.markForCheck();
      });
    }
  }
}
