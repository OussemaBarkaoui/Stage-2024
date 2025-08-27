/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { JobListingRequest } from '../../models/job-listing-request';

export interface UpdateJobListingById$Params {
  jobId: number;
      body: JobListingRequest
}

export function updateJobListingById(http: HttpClient, rootUrl: string, params: UpdateJobListingById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, updateJobListingById.PATH, 'patch');
  if (params) {
    rb.path('jobId', params.jobId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

updateJobListingById.PATH = '/jobs/update/{jobId}';
