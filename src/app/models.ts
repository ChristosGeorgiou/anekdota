export class Category {
    public image: string;
    public title: string;
    public count: number;
}

export class Joke {
    public text: string;
    public points: number;
    public added: string;
    public isNew?: boolean;

    constructor() {
        this.isNew = false;
    }
}