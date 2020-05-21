import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: string){
    this.term = value;
  }

  onFormSubmit(event: any) {
    // .html dla tej metody jest wciagniety w <form></form>
    // w takim przypadku po wcisnieciu enter automatycznie odświeża sie strona
    // ponizszy zapis zablokuje to
    event.preventDefault();
    this.submitted.emit(this.term);
  }

}
