import { InjectionToken } from '@angular/core';

export const JOB_REPORT_URLS = {
    login:'/api/login'
}

export const URL_TOKEN = new InjectionToken<string>('url');