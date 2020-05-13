import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Test1',
      imageUrl: 'https://source.unsplash.com/random/300x200',
      username: 'nature',
      content: 'test1'
    },
    {
      title: 'Test2',
      imageUrl: 'https://source.unsplash.com/random/301x201',
      username: 'nature',
      content: 'test2'
    },
    {
      title: 'Test1',
      imageUrl: 'https://source.unsplash.com/random/302x202',
      username: 'nature',
      content: 'test3'
    }
  ];
}
