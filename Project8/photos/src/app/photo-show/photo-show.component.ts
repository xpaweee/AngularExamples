import { PhotosService } from './../photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
photoUrl: string;

  constructor(private photoService: PhotosService) { }

  onClick() {
    this.fetchPhoto();
  }

  ngOnInit(): void {

  }

  fetchPhoto() {
    this.photoService.getPhoto().subscribe((resposne) => {

      this.photoUrl = resposne.urls.regular;
    });
  }

}
