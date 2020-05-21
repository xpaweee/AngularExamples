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

    this.wikipedia.search(term).subscribe((response: any) => {
      //.query.search bo taka jest budowa api
      this.pages = response.query.search;
    });

  }
}
