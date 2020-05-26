import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jr-readonlytable',
  templateUrl: './readonlytable.component.html',
  styleUrls: ['./readonlytable.component.css']
})
export class ReadonlytableComponent implements OnInit {

  @Input('columns') columns:any[] = [];

  @Input('data') data:any[] = [];

  displayedColumns:string[] = [];

  constructor() { 
    
  }

  ngOnInit(): void {
    this.buildColumns();
  }
  buildColumns(){
    this.columns.forEach((c)=>(this.displayedColumns.push(c.dataIndex)));
  }

}
