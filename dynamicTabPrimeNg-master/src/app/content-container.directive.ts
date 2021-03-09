import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[content-container]'
})
export class ContentContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
