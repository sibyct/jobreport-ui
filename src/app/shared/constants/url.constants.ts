import { InjectionToken } from '@angular/core';

export const JOB_REPORT_URLS = {
    LOGIN:'/api/login',
    INITIALIZE_CREATEREPORT:'/api/report/initialize-page',
    GENERATE_REPORT:'/api/report/generatereport',
    GET_CUSTOMERLIST :'/api/report/getcustomerlist'
}

export const URL_TOKEN = new InjectionToken<string>('url');