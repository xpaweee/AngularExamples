import { WikipediaService } from './wikipedia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pages = [];
  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {

    this.wikipedia.search(term).subscribe((pages) => {
      //.query.search bo taka jest budowa api
      this.pages = pages;
    });

  }
}
