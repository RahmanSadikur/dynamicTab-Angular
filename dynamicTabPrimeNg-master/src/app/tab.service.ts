import { Injectable } from '@angular/core';
import { Tab } from './tab.model';
import {DashboardComponent} from './dashboard/dashboard.component';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TabService {
  public tabs: Tab[] = [
    new Tab(DashboardComponent, 'Dashboard', { parent: 'AppComponent' }, false),
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
