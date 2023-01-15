export class WorkExp {
    id?: number;
    workName: string;
    workInfo: string;
    workDate: string;
    workImg: string;

    constructor (workName: string, workInfo: string, workDate: string, workImg: string) {
        this.workName = workName;
        this.workInfo = workInfo;
        this.workDate = workDate;
        this.workImg = workImg;
    }
}