import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // z powodu lazy loadingu zakomentowana zostala ponizsza linijka.
  // jesli bedzie dodany lazy loading dla tego componentu to routing zmieni sie na localhost:4200/elements/elements
  // w przypadku lazy loadingu nalezy zostawic routing pusty
  // {path: 'elements', component: ElementsHomeComponent}
  {path: '', component: ElementsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
