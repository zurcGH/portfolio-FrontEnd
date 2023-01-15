export class Skills {
    id: number;
    skill: string;
    percentage: number;
    skillImg: string;

    constructor(skill:string, percentage: number, skillImg: string){
        this.skill = skill;
        this.percentage = percentage;
        this.skillImg = skillImg;
    }
}