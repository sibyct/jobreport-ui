import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jr-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  host:{
    class:'jr-block-element jr-full-size'
  }
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
