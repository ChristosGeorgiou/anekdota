import { ArrayType } from '@angular/compiler/src/output/output_ast';
export class Category {
    public image: string;
    public title: string;
    public count: number;
}

export class Joke {
    public content: Array<string>;
    public points: number;
    public date: string;
    public tags: Array<string>;
    public isNew?: boolean;

    constructor() {
        this.isNew = false;
    }
}