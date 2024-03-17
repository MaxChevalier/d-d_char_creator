import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IClasse } from '../interface/IClasse';
import { IRace } from '../interface/IRace';
import { IBackground } from '../interface/IBackground';

@Injectable({
	providedIn: 'root'
})
export class Open5eService {

	private apiRoutes = {
		manifest: "https://api.open5e.com/v1/manifest/?format=json",
		spells: "https://api.open5e.com/v1/spells/?format=json",
		spelllist: "https://api.open5e.com/v1/spelllist/?format=json",
		monsters: "https://api.open5e.com/v1/monsters/?format=json",
		documents: "https://api.open5e.com/v1/documents/?format=json",
		backgrounds: "https://api.open5e.com/v1/backgrounds/?format=json",
		planes: "https://api.open5e.com/v1/planes/?format=json",
		sections: "https://api.open5e.com/v1/sections/?format=json",
		feats: "https://api.open5e.com/v1/feats/?format=json",
		conditions: "https://api.open5e.com/v1/conditions/?format=json",
		races: "https://api.open5e.com/v1/races/?format=json",
		classes: "https://api.open5e.com/v1/classes/?format=json",
		magicitems: "https://api.open5e.com/v1/magicitems/?format=json",
		weapons: "https://api.open5e.com/v1/weapons/?format=json",
		armor: "https://api.open5e.com/v1/armor/?format=json",
		search: "https://api.open5e.com/v1/search/?format=json"
	}

	constructor(private http: HttpClient) { }

	public getAllClasses(): Observable<IClasse[]> {
		return this.http.get(this.apiRoutes.classes).pipe(map(
			(res: any) => res.results as IClasse[])
		)
	}

	public getAllRaces(): Observable<IRace[]> {
		return this.http.get(this.apiRoutes.races).pipe(map(
			(res: any) => res.results as IRace[])
		)
	}

	public getAllBackgrounds(): Observable<IBackground[]> {
		return this.http.get(this.apiRoutes.backgrounds).pipe(map(
			(res: any) => res.results as IBackground[])
		)
	}
}
