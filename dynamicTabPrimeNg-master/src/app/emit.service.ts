import { Injectable } from '@angular/core';

import { Observable,Subject } from 'rxjs';



@Injectable()
export class EmitService {
  
  public _subject= new Subject <any>();
  emit<T>(data:T){
      this._subject.next(data);
  }
  on<T>():Observable<T>{
      return this._subject.asObservable();
  }
}
