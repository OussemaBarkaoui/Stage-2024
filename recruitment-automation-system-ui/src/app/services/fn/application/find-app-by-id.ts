/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseApplicationResponse } from '../../models/page-response-application-response';

export interface FindAppById$Params {
  appId: number;
  page?: number;
  size?: number;
}

export function findAppById(http: HttpClient, rootUrl: string, params: FindAppById$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseApplicationResponse>> {
  const rb = new RequestBuilder(rootUrl, findAppById.PATH, 'get');
  if (params) {
    rb.path('appId', params.appId, {});
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseApplicationResponse>;
    })
  );
}

findAppById.PATH = '/app/find/{appId}';
