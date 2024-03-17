import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-char-info',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './char-info.component.html',
  styleUrl: './char-info.component.css'
})
export class CharInfoComponent {

  @Output() public selectedInfo: EventEmitter<{ charName: string, playerName: string, alignment: string, }> = new EventEmitter<{ charName: string, playerName: string, alignment: string, }>()

  public form!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      charName: new FormControl('', [Validators.required]),
      playerName: new FormControl('', [Validators.required]),
      alignment: new FormControl('', [Validators.required]),
    });
  }

  setInfo() {
    this.selectedInfo.emit({
      charName: this.form.value.charName,
      playerName: this.form.value.playerName,
      alignment: this.form.value.alignment
    });
  }
}
