// To parse this data:
//
//   import { Convert, Diagram } from "./file";
//
//   const diagram = Convert.toDiagram(json);

export interface Diagram {
    page?:       Page;
    connectors?: Connector[];
    shapes?:     Shape[];
}

export interface Connector {
    key?:                       string;
    points?:                    Point[];
    zIndex?:                    number;
    beginItemKey?:              string;
    beginConnectionPointIndex?: number;
    endItemKey?:                string;
    endConnectionPointIndex?:   number;
    texts?:                     Texts;
}

export interface Point {
    x?: number;
    y?: number;
}

export interface Texts {
    "0.45"?: string;
    "0.78"?: string;
    "0.77"?: string;
    "0.47"?: string;
    "0.5"?:  string;
}

export interface Page {
    width?:         number;
    height?:        number;
    pageWidth?:     number;
    pageHeight?:    number;
    pageLandscape?: boolean;
    gridSize?:      number;
    snapToGrid?:    boolean;
}

export interface Shape {
    key?:       string;
    type?:      string;
    text?:      string;
    x?:         number;
    y?:         number;
    width?:     number;
    height?:    number;
    zIndex?:    number;
    locked?:    boolean;
    styleText?: StyleText;
}

export interface StyleText {
    "font-size"?:   string;
    "font-weight"?: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toDiagram(json: string): Diagram {
        return JSON.parse(json);
    }

    public static diagramToJson(value: Diagram): string {
        return JSON.stringify(value);
    }
}
