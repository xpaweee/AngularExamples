import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modshome',
  templateUrl: './modshome.component.html',
  styleUrls: ['./modshome.component.css']
})
export class ModshomeComponent implements OnInit {

  modalOpen = false;
  items = [

    {title: 'test1', content: 'Test dsadsa nidsnacsacsadidcsacsosa'},
    {title: 'test2', content: 'Test aidsa dsa dsasd '},
    {title: 'test3', content: 'Test asdfasfasfasf ddddddd'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
