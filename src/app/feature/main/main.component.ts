import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable} from 'rxjs';
import { delay } from 'rxjs/operators';

import {LoaderService} from '@shared/services/loader/loader.service';
@Component({
  selector: 'jr-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  host:{
    class:'jr-block-element jr-full-size'
  }
})
export class MainComponent implements OnInit, AfterViewInit {

  constructor(private loader:LoaderService) { }

  loaderSubcription :Observable<boolean>;
  
  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    this.loaderSubcription = this.loader.getLoader().pipe(delay(0));
  }

}
