export class Studies{
    id?: number;
    studyName: string;
    studyInfo: string;

    constructor (studyName: string, studyInfo: string) {
        this.studyName = studyName;
        this.studyInfo = studyInfo;
    }
}