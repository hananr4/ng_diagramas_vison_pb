// To parse this data:
//
//   import { Convert } from "./file";
//
//   const actividad = Convert.toActividad(json);

export interface Actividad {
    id?:     string;
    nombre?: string;
    tipo?:   string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toActividad(json: string): Actividad[] {
        return JSON.parse(json);
    }

    public static actividadToJson(value: Actividad[]): string {
        return JSON.stringify(value);
    }
}
