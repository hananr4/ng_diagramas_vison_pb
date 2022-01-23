// To parse this data:
//
//   import { Convert } from "./file";
//
//   const organigrama = Convert.toOrganigrama(json);

export interface Organigrama {
    id?:          string;
    descripcion?: string;
    id_superior?: null | string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toOrganigrama(json: string): Organigrama[] {
        return JSON.parse(json);
    }

    public static organigramaToJson(value: Organigrama[]): string {
        return JSON.stringify(value);
    }
}
