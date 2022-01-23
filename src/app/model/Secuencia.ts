// To parse this data:
//
//   import { Convert } from "./file";
//
//   const secuencia = Convert.toSecuencia(json);

export interface Secuencia {
    id_actividad_desde?: string;
    id_actividad_hasta?: string;
    descripcion?:        null | string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSecuencia(json: string): Secuencia[] {
        return JSON.parse(json);
    }

    public static secuenciaToJson(value: Secuencia[]): string {
        return JSON.stringify(value);
    }
}
