import { InjectionToken } from '@angular/core';

export const CODES = {
   AMC :42,
   VIP : 41,
   OTHERS : 43 
}

export const CODE_TOKEN = new InjectionToken<string>('codes');