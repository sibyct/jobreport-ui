import { InjectionToken } from '@angular/core';

export const tableColumns = [{
    label:'Reference Number',
    dataIndex:'refNo'
  },{
    label:'Date',
    dataIndex:'date'
  },{
    label:'Mobile No',
    dataIndex:'mobileNumber'
  },{
    label:'Customer Approval',
    dataIndex:'customerApproval'
}];

export const TABLE_CONFIG_TOKEN = new InjectionToken<string>('TableConfig');
