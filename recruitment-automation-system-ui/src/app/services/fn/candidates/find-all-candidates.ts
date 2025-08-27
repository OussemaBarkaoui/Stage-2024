/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseCandidateResponse } from '../../models/page-response-candidate-response';

export interface FindAllCandidates$Params {
  page?: number;
  size?: number;
}

export function findAllCandidates(http: HttpClient, rootUrl: string, params?: FindAllCandidates$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCandidateResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllCandidates.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseCandidateResponse>;
    })
  );
}

findAllCandidates.PATH = '/candidates';
