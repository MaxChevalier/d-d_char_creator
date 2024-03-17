import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-diceroler',
  standalone: true,
  imports: [],
  templateUrl: './diceroler.component.html',
  styleUrl: './diceroler.component.css'
})
export class DicerolerComponent {

  @Input() diceFaces: number = 6;

  value: number = 0;

  role(){
    this.value = Math.floor(Math.random() * this.diceFaces) + 1;
  }

  ngOnInit(){
    this.role();
  }

}
