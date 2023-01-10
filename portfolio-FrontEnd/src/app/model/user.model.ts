export class user{
    id?: number;
    name: String;
    lastName: String;
    img: String;

    constructor (name: String, lastName: String, img: String){
        this.name = name;
        this.lastName = lastName;
        this.img = img;
    }
}