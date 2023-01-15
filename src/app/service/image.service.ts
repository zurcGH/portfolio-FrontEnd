import { Injectable } from '@angular/core';
import { getDownloadURL, list, Storage, uploadBytes } from '@angular/fire/storage';
import { ref } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, folder: string) {
    const file = $event.target.files[0];
    const name = file.name;
    const imgRef = ref(this.storage, `img/${folder}/${file.name}`);
    uploadBytes(imgRef, file).then(response => {this.getImage(name, folder)}).catch(error => console.log(error));
  }

  getImage(name: string, folder: string){
    const imageRef = ref(this.storage, `img/${folder}/`);
    list(imageRef).then(async response => {for (let item of response.items) {
      if (item.name == name) {
        this.url = await getDownloadURL(item);
      }
    }}).catch(error => console.log(error));
  }

  clearUrl(){
    this.url = "";
  }
}
