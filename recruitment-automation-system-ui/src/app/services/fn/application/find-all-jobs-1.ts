/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseApplicationResponse } from '../../models/page-response-application-response';

export interface FindAllJobs1$Params {
  page?: number;
  size?: number;
}

export function findAllJobs1(http: HttpClient, rootUrl: string, params?: FindAllJobs1$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseApplicationResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllJobs1.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseApplicationResponse>;
    })
  );
}

findAllJobs1.PATH = '/app/find/all';
