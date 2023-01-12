import { Injectable } from '@angular/core';
import { getDownloadURL, list, Storage, uploadBytes } from '@angular/fire/storage';
import { ref } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, imgName: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `img/` + imgName)
    uploadBytes(imgRef, file).then(response => {this.getImage()}).catch(error => console.log(error));
  }

  getImage(){
    const imageRef = ref(this.storage, 'img');
    list(imageRef).then(async response => {for (let item of response.items) {
      this.url = await getDownloadURL(item);
    }}).catch(error => console.log(error));
  }
}
