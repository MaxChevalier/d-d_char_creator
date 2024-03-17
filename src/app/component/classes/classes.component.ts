import { Component, EventEmitter, Output } from '@angular/core';
import { Open5eService } from '../../service/open5e.service';
import { IClasse } from '../../interface/IClasse';
import { SubscriberController } from '../Commun/subscriberController';
import { NgFor } from '@angular/common';

@Component({
	selector: 'app-classes',
	standalone: true,
	imports: [NgFor],
	providers: [Open5eService],
	templateUrl: './classes.component.html',
	styleUrl: './classes.component.css'
})
export class ClassesComponent extends SubscriberController {
	public classes: IClasse[] = [];

	@Output() public selectedClass: EventEmitter<IClasse> = new EventEmitter<IClasse>()

	constructor(private open5eService: Open5eService) {
		super()
	}

	ngOnInit() {
		this.subscription["$getClasse"] = this.open5eService.getAllClasses().subscribe(
			{
				next: (res) => {
					this.classes = res
				},
				error: (err) => {
					console.error(err)
				}
			}
		)
	}

	public setClass(classe: IClasse) {
		this.selectedClass.emit(classe)
	}
}
