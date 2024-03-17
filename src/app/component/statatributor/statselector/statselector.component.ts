import { Component, EventEmitter, Output } from '@angular/core';
import { IStat } from '../../../interface/IStat';
import { StatComponent } from './stat/stat.component';

@Component({
  selector: 'app-statselector',
  standalone: true,
  imports: [StatComponent],
  templateUrl: './statselector.component.html',
  styleUrl: './statselector.component.css'
})
export class StatselectorComponent {
  public stat : IStat = {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10
  }
  public attrPoints : number = 12;

  @Output() public selectedStat: EventEmitter<IStat> = new EventEmitter<IStat>()

  public SetStat(value:number, update:number): number{
    // let newvalue = value + update;
    let updatedPoints = 0;
    if (value < 3 || value > 15) return value;
    else if (value < 8) updatedPoints = 0;
    else if (value < 14) updatedPoints = 1;
    else updatedPoints = 2;
    if (update < 0) this.attrPoints += -updatedPoints;
    else this.attrPoints += updatedPoints;
    return value + update;
  }

  callOutput(item: {name: string, value: number}) {
    this.stat = Object.assign(this.stat, {[item.name]: this.SetStat(this.stat[item.name as keyof IStat], item.value)});
    this.selectedStat.emit(this.stat);
  }

}
