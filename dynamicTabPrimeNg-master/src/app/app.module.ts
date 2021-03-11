import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import { TabContentComponent } from './tab-content.component';
import { ContentContainerDirective } from './content-container.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TabService} from './tab.service';
import { JahidViComponent } from './jahid-vi/jahid-vi.component';
import { RaihanViComponent } from './raihan-vi/raihan-vi.component';
import { HRComponent } from './hr/hr.component';
import { DeciplineComponent } from './decipline/decipline.component';
import { EditdeceplineComponent } from './editdecepline/editdecepline.component';
import { ListviewComponent } from './listview/listview.component';
import {EmitService} from './emit.service';
import {ChildTabService} from './childtab.service';
import { from } from 'rxjs';
import{EntryComponent}from './EntryComponent';
import { DemoComponent } from './demo/demo.component';
import { TestComponent } from './test/test.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TabContentComponent,
    ContentContainerDirective,
    JahidViComponent,
    RaihanViComponent,
    HRComponent,
    DeciplineComponent,
    EditdeceplineComponent,
    ListviewComponent,
    DemoComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabViewModule,
    ButtonModule,
  ],
  providers: [TabService,EmitService,ChildTabService,EntryComponent],
  bootstrap: [AppComponent],
  entryComponents: [DashboardComponent]
})
export class AppModule { }
