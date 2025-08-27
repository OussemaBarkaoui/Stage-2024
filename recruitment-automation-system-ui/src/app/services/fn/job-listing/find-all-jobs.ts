/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseJobListingResponse } from '../../models/page-response-job-listing-response';

export interface FindAllJobs$Params {
  page?: number;
  size?: number;
}

export function findAllJobs(http: HttpClient, rootUrl: string, params?: FindAllJobs$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseJobListingResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllJobs.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseJobListingResponse>;
    })
  );
}

findAllJobs.PATH = '/jobs/find/all';
