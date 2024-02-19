interface IAsi {
    attributes: string[],
    value: number
}

interface ISpeed {
    walk: number
}

interface ISubraces {
    "name": string,
    "slug": string,
    "desc": string,
    "asi": IAsi[],
    "traits": string,
    "asi_desc": string,
    "document__slug": string,
    "document__title": string,
    "document__url": string
}

export interface IRace {
    "name": string,
    "slug": string,
    "desc": string,
    "asi_desc": string,
    "asi": IAsi[],
    "age": string,
    "alignment": string,
    "size": string,
    "size_raw": string,
    "speed": ISpeed,
    "speed_desc": string,
    "languages": string,
    "vision": string,
    "subraces": ISubraces[],
    "document__slug": string,
    "document__title": string,
    "document__license_url": string,
    "document__url": string
}