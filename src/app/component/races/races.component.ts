import { Component, EventEmitter, Output } from '@angular/core';
import { Open5eService } from '../../service/open5e.service';
import { IRace } from '../../interface/IRace';
import { SubscriberController } from '../Commun/subscriberController';
import { NgFor } from '@angular/common';

@Component({
	selector: 'app-races',
	standalone: true,
	imports: [NgFor],
	templateUrl: './races.component.html',
	styleUrl: './races.component.css'
})
export class RacesComponent extends SubscriberController {
	public races: IRace[] = [];
	
	@Output() public selectedRace: EventEmitter<IRace> = new EventEmitter<IRace>()

	constructor(private open5eService: Open5eService) {
		super()
	}

	ngOnInit() {
		this.subscription["$GetRace"] = this.open5eService.getAllRaces().subscribe(
			{
				next: (res) => {
					this.races = res
				},
				error: (err) => {
					console.error(err)
				}
			}
		)
	}

	public setRace(race: IRace) {
		this.selectedRace.emit(race)
	}
}
