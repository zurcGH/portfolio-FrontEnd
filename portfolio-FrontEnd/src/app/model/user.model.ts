export class user{
    id?: number;
    name: String;
    lastName: String;
    about: string;
    img: String;

    constructor (name: string, lastName: string, about: string, img: string){
        this.name = name;
        this.lastName = lastName;
        this.about = about;
        this.img = img;
    }
}