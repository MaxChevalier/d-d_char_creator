import { Component } from '@angular/core';
import { ClassesComponent } from '../../component/classes/classes.component';
import { RacesComponent } from '../../component/races/races.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    ClassesComponent, RacesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public selectedTab : string = '';

  onChangeTab(event: any) {
    if (!event || !event.target || !event.target.value) return;
    this.selectedTab = event.target.value;
    console.log(this.selectedTab);
  }
}