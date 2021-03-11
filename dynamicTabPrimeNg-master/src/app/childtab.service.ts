import { Injectable } from '@angular/core';
import { Tab } from './tab.model';
import { BehaviorSubject} from 'rxjs';
import{ListviewComponent} from './listview/listview.component';


@Injectable()
export class ChildTabService {
  public tabs: Tab[] = [
    new Tab(ListviewComponent, 'Dashboard', { parent: 'DeciplineComponent' }, false),
  ];

  public tabSub = new BehaviorSubject<Tab[]>(this.tabs);

  public removeTab (index: number) {
    this.tabs.splice(index, 1);
    if (this.tabs.length > 0) {
      this.tabs[0].active = true;
    }
    this.tabSub.next(this.tabs);
  }

  public addTab (tab: Tab) {
    for (let i = 0; i < this.tabs.length; i++)
    {
      if (this.tabs[i].title === tab.title)
      {
        this.tabs[i].active = true;
        for (let j = i + 1; j < this.tabs.length; j++)
        {
          this.tabs[j].active = false;
        }
        this.tabSub.next(this.tabs);
        return;
      }
      else{
        this.tabs[i].active = false;
      }
    }
    tab.id = this.tabs.length + 1;
    tab.active = true;
    this.tabs.push(tab);
    this.tabSub.next(this.tabs);
  }


}
