export class Projects {
    id?: number;
    projectName: string;
    projectInfo: string;
    projectDate: string;
    projectSource: string;
    projectImg: string;

    constructor (projectName: string, projectInfo: string, projectDate: string, projectSource: string, projectImg: string) {
        this.projectName = projectName;
        this.projectInfo = projectInfo;
        this.projectImg = projectImg;
        this.projectDate = projectDate;
        this.projectSource = projectSource;
    }
}