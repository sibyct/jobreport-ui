import { Component, OnInit,Inject} from '@angular/core';
import{NAV_LIST_CONFIG_TOKEN,Navlist,NavListType} from './config';
@Component({
  selector: 'jr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[{
    provide: NAV_LIST_CONFIG_TOKEN, useValue: Navlist
  }]
})
export class NavComponent implements OnInit {

  constructor(@Inject(NAV_LIST_CONFIG_TOKEN) public navlist: NavListType[]) { }
  ngOnInit(): void {}

}
