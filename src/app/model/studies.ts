export class Studies{
    id?: number;
    studyName: string;
    studyInfo: string;
    studyDate: string;
    studyImg: string;

    constructor (studyName: string, studyInfo: string, studyDate: string, studyImg: string) {
        this.studyName = studyName;
        this.studyInfo = studyInfo;
        this.studyDate = studyDate;
        this.studyImg = studyImg;
    }
}