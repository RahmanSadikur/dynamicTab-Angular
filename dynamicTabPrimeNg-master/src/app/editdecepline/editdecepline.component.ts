import { Component, OnInit } from '@angular/core';
import{EmitService} from '../emit.service'
@Component({
  selector: 'app-editdecepline',
  templateUrl: './editdecepline.component.html',
  styleUrls: ['./editdecepline.component.scss']
})
export class EditdeceplineComponent implements OnInit {

  constructor(private EmitService:EmitService ) { }
show(){
  this.EmitService.emit<string>("refresh");
}
  ngOnInit(): void {
  }

}
