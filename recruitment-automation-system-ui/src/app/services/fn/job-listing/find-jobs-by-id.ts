/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseJobListingResponse } from '../../models/page-response-job-listing-response';

export interface FindJobsById$Params {
  jobId: number;
  page?: number;
  size?: number;
}

export function findJobsById(http: HttpClient, rootUrl: string, params: FindJobsById$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseJobListingResponse>> {
  const rb = new RequestBuilder(rootUrl, findJobsById.PATH, 'get');
  if (params) {
    rb.path('jobId', params.jobId, {});
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

findJobsById.PATH = '/jobs/find/{jobId}';
