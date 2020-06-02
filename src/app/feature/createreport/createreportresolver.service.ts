import { Injectable, Inject } from '@angular/core';
import { Resolve } from '@angular/router';

import {HttpService} from '@shared/services/http/http.service';
import {URL_TOKEN} from '@shared/constants/url.constants';

@Injectable()
export class CreatereportresolverService implements Resolve<Promise<any>> {

  constructor(private http:HttpService, @Inject(URL_TOKEN) private URLS) { }

  resolve() {
    return this.http.get(this.URLS.INITIALIZE_CREATEREPORT)
  }
}
