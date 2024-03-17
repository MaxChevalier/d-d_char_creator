import { Component, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';
import { DicerolerComponent } from '../../../diceroler/diceroler.component';

@Component({
  selector: 'app-getstat',
  standalone: true,
  imports: [
    DicerolerComponent
  ],
  templateUrl: './getstat.component.html',
  styleUrl: './getstat.component.css'
})
export class GetstatComponent {

  @ViewChildren(DicerolerComponent) dicerolers!: QueryList<DicerolerComponent>;

  public total: number = 0;

  constructor() {
  }

  roleDice() {
    let res: number[] = [];
    this.dicerolers.forEach(diceroler => {
      diceroler.role()
      res.push(diceroler.value);
    });
    res = res.sort((a, b) => b - a);
    this.total = res[0] + res[1] + res[2];
  }

}
