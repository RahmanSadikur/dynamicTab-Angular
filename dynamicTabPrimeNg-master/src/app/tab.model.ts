import { Type } from '@angular/core';

export class Tab {
  public id: number;
  public title: string;
  public tabData: any;
  public active: boolean;
  public component: Type<any>;
  public close: boolean;
  public childID:number;
  public childName:string;

  constructor(component: Type<any>, title: string,tabData: any, close: boolean) {
    this.tabData = tabData;
    this.component = component;
    this.title = title;
    this.close = close;
  }
}
