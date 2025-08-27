/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseApplicationResponse } from '../../models/page-response-application-response';

export interface FindJobsById1$Params {
  appId: number;
  page?: number;
  size?: number;
}

export function findJobsById1(http: HttpClient, rootUrl: string, params: FindJobsById1$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseApplicationResponse>> {
  const rb = new RequestBuilder(rootUrl, findJobsById1.PATH, 'get');
  if (params) {
    rb.path('appId', params.appId, {});
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

findJobsById1.PATH = '/app/find/{appId}';
