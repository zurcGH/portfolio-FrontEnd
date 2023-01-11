export class WorkExp {
    id?: number;
    workName: string;
    workInfo: string;

    constructor (workName: string, workInfo: string) {
        this.workName = workName;
        this.workInfo = workInfo;
    }
}