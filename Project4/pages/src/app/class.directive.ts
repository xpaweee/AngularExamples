import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) {
   }

   //set odświeża komponent. Jesli metoda zostanie wywoalana w widoku po konstrukotrze to odswiezy sie kolor.
   @Input() set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
   }

  // @Input('appClass') set className(classObj: any) {
  //   for(let key in classObj){
  //     if(classObj[key]) {
  //       this.element.nativeElement.classList.add(key);
  //     } else {
  //       this.element.nativeElement.classList.remove(key);
  //     }
  //   }
  // }
}
