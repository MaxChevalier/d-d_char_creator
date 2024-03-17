import { IBackground } from "./IBackground";
import { IClasse } from "./IClasse";
import { IRace } from "./IRace";
import { IStat } from "./IStat";

export interface IChar {
    charName: string,
    playerName: string,
    class: IClasse,
    race: IRace,
    level: number,
    exp: number,
    background: IBackground,
    alignment: string,
    stat: IStat

}