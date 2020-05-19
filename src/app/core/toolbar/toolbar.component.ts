import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jr-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleNav: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideNav():void{
    this.toggleNav.emit();
  }

}
