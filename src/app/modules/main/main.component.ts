import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

import {LoaderService} from '@shared/services/loader/loader.service';
@Component({
  selector: 'jr-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  host:{
    class:'jr-block-element jr-full-size'
  }
})
export class MainComponent implements OnInit {

  constructor(private loader:LoaderService) { }

  loaderSubcription :Observable<boolean>;
  
  ngOnInit(): void {
    this.loaderSubcription = this.loader.getLoader();
  }

}
