import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface UnsplashResponse{
  urls:{
    regular: string;
  }
}


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

 getPhoto() {
   return this.http.get<UnsplashResponse>('https://apu.unsplash.com/photos/random' , {
      headers: {
        Authorization: 'Client-ID o_2tiLq3nOWpOnUqXWnAtjRnQTamLXcUomFYKmmbumA'
      }
   });
 }
}
