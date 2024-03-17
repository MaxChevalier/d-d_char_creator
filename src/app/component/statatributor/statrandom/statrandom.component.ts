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
        let stat = {} as IStat;
        this.dicerolers.forEach(diceroler => {
            // get perent of diceroler
            switch (diceroler.elementRef && diceroler.elementRef.nativeElement.parentElement) {
                case "str" :
                    stat.strength = diceroler.total;
                    break;
                case "dex" :
                    stat.dexterity = diceroler.total;
                    break;
                case "con" :
                    stat.constitution = diceroler.total;
                    break;
                case "int" :
                    stat.intelligence = diceroler.total;
                    break;
                case "wis" :
                    stat.wisdom = diceroler.total;
                    break;
                case "cha" :
                    stat.charisma = diceroler.total;
                    break;
            }
        });
        this.selectedStat.emit(stat)
    }

}
