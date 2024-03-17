import { Component, EventEmitter, Output } from '@angular/core';
import { StatrandomComponent } from './statrandom/statrandom.component';
import { StatselectorComponent } from './statselector/statselector.component';
import { FormsModule } from '@angular/forms';
import { IStat } from '../../interface/IStat';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-statatributor',
  standalone: true,
  imports: [
    StatrandomComponent,
    StatselectorComponent,
    FormsModule,
    NgIf,
  ],
  templateUrl: './statatributor.component.html',
  styleUrl: './statatributor.component.css'
})
export class StatatributorComponent {

  @Output() public selectedStat: EventEmitter<IStat> = new EventEmitter<IStat>()

  isRandom: boolean = false;

  setStat(stat: IStat) {
    this.selectedStat.emit(stat)
  }

  switchRdm(stat: boolean) {
    this.isRandom = stat;
  }
  
}
