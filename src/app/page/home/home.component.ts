import { Component } from '@angular/core';
import { ClassesComponent } from '../../component/classes/classes.component';
import { RacesComponent } from '../../component/races/races.component';
import { NgIf } from '@angular/common';
import { BackgroundComponent } from '../../component/background/background.component';
import { StatatributorComponent } from '../../component/statatributor/statatributor.component';
import { IChar } from '../../interface/IChar';
import { IClasse } from '../../interface/IClasse';
import { IRace } from '../../interface/IRace';
import { IStat } from '../../interface/IStat';
import { IBackground } from '../../interface/IBackground';
import { CharInfoComponent } from '../../component/char-info/char-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    ClassesComponent,
    RacesComponent,
    BackgroundComponent,
    StatatributorComponent,
    CharInfoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public selectedTab: string = '';

  public Char: IChar = {} as IChar;

  onChangeTab(event: any) {
    if (!event || !event.target || !event.target.value) return;
    this.selectedTab = event.target.value;
    console.log(this.selectedTab);
  }

  setClass(classe: IClasse) {
    this.Char.class = classe;
  }

  setRace(race: IRace) {
    this.Char.race = race;
  }

  setStat(stat: IStat) {
    this.Char.stat = stat;
  }

  setBg(bg: IBackground) {
    this.Char.background = bg;
  }

  setInfo(info: { charName: string, playerName: string, alignment: string, }) {
    this.Char.charName = info.charName;
    this.Char.playerName = info.playerName;
    this.Char.alignment = info.alignment;
  }

}