/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { findAllCandidates } from '../fn/candidates/find-all-candidates';
import { FindAllCandidates$Params } from '../fn/candidates/find-all-candidates';
import { findCandidatesById } from '../fn/candidates/find-candidates-by-id';
import { FindCandidatesById$Params } from '../fn/candidates/find-candidates-by-id';
import { PageResponseCandidateResponse } from '../models/page-response-candidate-response';

@Injectable({ providedIn: 'root' })
export class CandidatesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAllCandidates()` */
  static readonly FindAllCandidatesPath = '/candidates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllCandidates()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllCandidates$Response(params?: FindAllCandidates$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCandidateResponse>> {
    return findAllCandidates(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllCandidates$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllCandidates(params?: FindAllCandidates$Params, context?: HttpContext): Observable<PageResponseCandidateResponse> {
    return this.findAllCandidates$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseCandidateResponse>): PageResponseCandidateResponse => r.body)
    );
  }

  /** Path part for operation `findCandidatesById()` */
  static readonly FindCandidatesByIdPath = '/candidates/find/{candidateId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findCandidatesById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCandidatesById$Response(params: FindCandidatesById$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCandidateResponse>> {
    return findCandidatesById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findCandidatesById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCandidatesById(params: FindCandidatesById$Params, context?: HttpContext): Observable<PageResponseCandidateResponse> {
    return this.findCandidatesById$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseCandidateResponse>): PageResponseCandidateResponse => r.body)
    );
  }

}
