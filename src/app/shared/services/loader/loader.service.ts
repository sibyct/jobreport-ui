import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {

  private subject = new BehaviorSubject<boolean>(false);

  start() {
    this.subject.next(true);
  }
  clear() {
    this.subject.next(false);
  }
  getLoader() :Observable<any>{

    return this.subject.asObservable();
    
  }
}
