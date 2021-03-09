import { Component, OnInit } from '@angular/core';
import {Tab} from './tab.model';
import {TabService} from './tab.service';
import {RaihanViComponent} from './raihan-vi/raihan-vi.component';
import {JahidViComponent} from './jahid-vi/jahid-vi.component';
import {HRComponent} from './hr/hr.component';
import{DeciplineComponent} from './decipline/decipline.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TabService]
})
export class AppComponent implements OnInit{
  title = 'dynamicTabPrimeNg';
  tabs = new Array<Tab>();
  selectedTab: number;
  constructor(private tabService: TabService) {
  }
  ngOnInit() {
    this.tabService.tabSub.subscribe(tabs => {
      this.tabs = tabs;
      this.selectedTab = 0;
    });
  }

  addNewTab(componentName: string) {
    if (componentName === 'HR')
    {
      this.tabService.addTab(
        new Tab(HRComponent, 'HR', { parent: 'AppComponent' }, true)
      );
    }
    else if (componentName === 'Jahid Vi')
    {
      this.tabService.addTab(
        new Tab(JahidViComponent, 'Jahid Vi', { parent: 'AppComponent' }, true)
      );
    }
    else if (componentName === 'Raihan Vi')
    {
      this.tabService.addTab(
        new Tab(RaihanViComponent, 'Raihan Vi', { parent: 'AppComponent' }, true)
      );
    }
    else if (componentName === 'Decepline')
    {
      this.tabService.addTab(
        new Tab(DeciplineComponent, 'Decepline', { parent: 'AppComponent' }, true)
      );
    }
    this.selectedTab = this.tabs.findIndex(tab => tab.active);
  }

  removeTab(event): void {
    this.tabService.removeTab(event.index);
  }
}
