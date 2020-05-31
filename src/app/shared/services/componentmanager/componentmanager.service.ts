import { Injectable,  Component} from '@angular/core';
import {SharedserviceModule} from '../sharedservice.module';

@Injectable({
  providedIn: SharedserviceModule
})
export class ComponentmanagerService {
  private componentRefMap:{ [key:string]:any} = {};

  setComponent(name:string, componentRef:any):void{
    this.componentRefMap[name] = componentRef;
  }
  getComponent(id:string): any{
    return this.componentRefMap[id];
  }
  removeCompoent(id:string){
    delete this.componentRefMap[id];
  }
}
