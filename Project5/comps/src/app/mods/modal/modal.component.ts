import { Component, OnInit, ElementRef, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // tslint:disable-next-line:no-output-native
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }

}
