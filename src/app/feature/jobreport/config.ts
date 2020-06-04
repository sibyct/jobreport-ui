import { InjectionToken } from '@angular/core';

export const tableColumns = [{
    name:'referenceNumber',
    dataIndex:'requestid',
    type:'url'
  },{
    name:'date',
    dataIndex:'requestdate',
    type:'date'
  },{
    name:'mobileNo',
    dataIndex:'mobno'
  },{
    name:'name',
    dataIndex:'cusfirstname'
  },{
    name:'typeofservice',
    dataIndex:'typeofservice',
    type:'list'
  },{
    name:'customerApproval',
    dataIndex:'customerApproval',
    type:'boolean'
}];

export const TABLE_CONFIG_TOKEN = new InjectionToken<string>('TableConfig');
