import { Component, OnInit } from '@angular/core';
import {Tab} from '../tab.model';
import{ChildTabService} from '../childtab.service'
//import {EditdeceplineComponent} from '../editdecepline/editdecepline.component';
import{EmitService} from '../emit.service';
import {EntryComponent} from '../EntryComponent'

@Component({
  selector: 'app-decipline',
  templateUrl: './decipline.component.html',
  styleUrls: ['./decipline.component.scss'],
  providers: [ChildTabService]
})
export class DeciplineComponent implements OnInit {
  title = 'dynamicTabPrimeNg';
  tabs = new Array<Tab>();
  selectedTab: number;
  constructor(private ChildTabService: ChildTabService,private EmitService:EmitService,private entryComponent:EntryComponent) {
  }
  ngOnInit() {
    this.ChildTabService.tabSub.subscribe(tabs => {
      this.tabs = tabs;
      this.selectedTab = 0;
    });
    this.EmitService.on<string>().subscribe(data=>{
      this.addNewTab(data);
    });
  }

  addNewTab(componentName: string) {
    // if (componentName === 'Editdecepline')
    // {
    //   this.ChildTabService.addTab(
    //     new Tab(EditdeceplineComponent, 'Editdecepline', { parent: 'DeciplineComponent' }, true)
    //   );
    // } 

    var tab=this.entryComponent.tab.find(t=>t.title===componentName);
    console.log(tab);
    if(tab !==undefined||tab!==null){
     
      this.ChildTabService.addTab(
        tab
       );

    }
    this.selectedTab = this.tabs.findIndex(tab => tab.active);
  }

  removeTab(event): void {
    this.ChildTabService.removeTab(event.index);
  }

}
