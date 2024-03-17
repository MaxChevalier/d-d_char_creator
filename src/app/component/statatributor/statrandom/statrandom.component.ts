import { Component, QueryList, ViewChildren, ElementRef, Output, EventEmitter } from '@angular/core';
import { GetstatComponent } from './getstat/getstat.component';
import { IStat } from '../../../interface/IStat';

@Component({
    selector: 'app-statrandom',
    standalone: true,
    imports: [
        GetstatComponent,

    ],
    templateUrl: './statrandom.component.html',
    styleUrl: './statrandom.component.css'
})
export class StatrandomComponent {

    @ViewChildren(GetstatComponent) dicerolers!: QueryList<GetstatComponent>;

    @Output() public selectedStat: EventEmitter<IStat> = new EventEmitter<IStat>()

    stat : IStat = {} as IStat;

    dragData: any;

    constructor(private elementRef: ElementRef) {}

    roleDice() {
        this.dicerolers.forEach(diceroler => {
            diceroler.roleDice()
        });
        this.setStat();
    }

    tmp(value: any) {
        console.log(value);
    }

    dragStart(event: any) {
        this.dragData = event.target;
    }
    dragOver(event: any) {
        event.preventDefault();
        event.stopPropagation();
    }
    drop(event: any) {
        event.preventDefault();
        event.stopPropagation();
        // si un elem est déplacé
        if (this.dragData) {
            let target = event.target;

            // on remonte jusqu'à trouver un dropzone
            while (target && !target.getAttribute('dropzone')) {
                target = target.parentElement;
            }

            // si il y a deja un elem dans une stat on le remet dans l'attrless
            if (target.id != "attrless" && target.childNodes && target.childNodes.length > 1) {
                document.getElementById("attrless")!.appendChild(target.childNodes[1]);
            }

            // on ajoute l'elem dans la stat
            target.appendChild(this.dragData);
            this.dragData = null;
            this.setStat();
        }
    }

    setStat() {
        let stats = this.elementRef.nativeElement.querySelectorAll('.stat');
        let stat = {} as IStat;
        stats.forEach((statobj: any) => {
            let name = statobj.getAttribute('name');
            console.log(statobj.childNodes);
            let value = statobj.childNodes[1].total;
            console.log(name, value);
            stat = { ...stat, [name]: value };
        });
        this.stat = stat;
        console.log(this.stat);
        this.selectedStat.emit(this.stat);
    }

}
