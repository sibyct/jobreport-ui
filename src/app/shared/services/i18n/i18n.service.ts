import { Injectable } from '@angular/core';
import {i18nLabels} from '../../locale/i18n.en';

@Injectable()
export class I18nService {
  
  labels:{[key:string]:string} = {};

  constructor() {
    this.labels = i18nLabels;
   }
   transformLabel(name:string) :string{
      return this.labels[name] || name;
   }
}
