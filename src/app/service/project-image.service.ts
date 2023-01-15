/*import { Injectable } from '@angular/core';
import { getDownloadURL, list, Storage, uploadBytes } from '@angular/fire/storage';
import { ref } from '@angular/fire/storage';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectImageService {
  url: string = "";

  constructor(private storage: Storage, public imageService: ImageService) { }

  public uploadImage($event: any) {
    const name = "project_" + this.name; 
    this.imageService.uploadImage($event, name)
}

  getImage(){
    const imageRef = ref(this.storage, 'img');
    list(imageRef).then(async response => {for (let item of response.items) {
      this.url = await getDownloadURL(item);
    }}).catch(error => console.log(error));
  }
}*/