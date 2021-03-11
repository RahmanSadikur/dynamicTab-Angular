import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import{EmitService} from '../emit.service'

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {

  constructor(private EmitService:EmitService) { }
 hello="sadik";
  ngOnInit(): void {
this.EmitService.on<string>().subscribe(data=>{
  if(data==="refresh"){
    this.hello=data;
  }

});
  }
  addNewTab(data){
    this.EmitService.emit<string>(data);
  }

}
