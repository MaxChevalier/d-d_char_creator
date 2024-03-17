import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GetstatComponent } from './getstat/getstat.component';

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

    dragData: any;

    roleDice() {
        this.dicerolers.forEach(diceroler => {
            diceroler.roleDice()
        });
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
        }
    }

}
