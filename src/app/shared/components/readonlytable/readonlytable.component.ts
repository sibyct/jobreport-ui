import { Component, OnInit, Input, ViewChild} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'jr-readonlytable',
  templateUrl: './readonlytable.component.html',
  styleUrls: ['./readonlytable.component.css']
})
export class ReadonlytableComponent implements OnInit {

  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @Input('columns') columns:any[] = [];

  @Input() 
  set data(d){
    this.dataSource = new MatTableDataSource<any>(d);
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns:string[] = [];
  constructor() { 
    
  }

  ngOnInit(): void {
    this.buildColumns();
    //this.dataSource.paginator = this.paginator;
  }
  buildColumns(){
    this.columns.forEach((c)=>(this.displayedColumns.push(c.dataIndex)));
  }

}
