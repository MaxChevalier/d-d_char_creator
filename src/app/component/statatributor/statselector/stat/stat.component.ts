import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IStat } from '../../../../interface/IStat';

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [],
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.css'
})
export class StatComponent {

    @Input() public name! : keyof IStat;
    @Input() public value : number = 0;
    @Input() public attrPoints : number = 0;

    @Output() public SetStat = new EventEmitter<{name: keyof IStat, value: number}>()

    onUpdateStat(value : number) {
      this.SetStat.emit({
          name: this.name,
          value: value
        });
    }
}
