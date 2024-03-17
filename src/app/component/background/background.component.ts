import { Component, EventEmitter, Output } from '@angular/core';
import { Open5eService } from '../../service/open5e.service';
import {SubscriberController} from '../Commun/subscriberController';
import { IBackground } from '../../interface/IBackground';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [NgFor],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent extends SubscriberController {
  public backgrounds: IBackground[] = [];

	@Output() public selectedBackground: EventEmitter<IBackground> = new EventEmitter<IBackground>()

	constructor(private open5eService: Open5eService) {
		super()
	}

	ngOnInit() {
		this.subscription["$getClasse"] = this.open5eService.getAllBackgrounds().subscribe(
			{
				next: (res) => {
					this.backgrounds = res
				},
				error: (err) => {
					console.error(err)
				}
			}
		)
	}

	public setBg(bg: IBackground) {
		this.selectedBackground.emit(bg)
	}
}
