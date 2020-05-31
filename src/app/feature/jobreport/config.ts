import { InjectionToken } from '@angular/core';

export const tableColumns = [{
    name:'referenceNumber',
    dataIndex:'refNo'
  },{
    name:'date',
    dataIndex:'date'
  },{
    name:'mobileNo',
    dataIndex:'mobileNumber'
  },{
    name:'customerApproval',
    dataIndex:'customerApproval'
}];

export const TABLE_CONFIG_TOKEN = new InjectionToken<string>('TableConfig');
