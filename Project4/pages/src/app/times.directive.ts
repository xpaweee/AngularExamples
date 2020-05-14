import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
//structur directive
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times: number){

    //usuniecie całego widoku - kontentera -  w tym przypadku całego li
    this.viewContainer.clear();

    //utworzenie całego widoku
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
