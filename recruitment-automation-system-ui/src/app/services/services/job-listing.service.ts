/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createJobListing } from '../fn/job-listing/create-job-listing';
import { CreateJobListing$Params } from '../fn/job-listing/create-job-listing';
import { deleteJobListingById } from '../fn/job-listing/delete-job-listing-by-id';
import { DeleteJobListingById$Params } from '../fn/job-listing/delete-job-listing-by-id';
import { findAllJobs } from '../fn/job-listing/find-all-jobs';
import { FindAllJobs$Params } from '../fn/job-listing/find-all-jobs';
import { findJobsById } from '../fn/job-listing/find-jobs-by-id';
import { FindJobsById$Params } from '../fn/job-listing/find-jobs-by-id';
import { PageResponseJobListingResponse } from '../models/page-response-job-listing-response';
import { updateJobListingById } from '../fn/job-listing/update-job-listing-by-id';
import { UpdateJobListingById$Params } from '../fn/job-listing/update-job-listing-by-id';

@Injectable({ providedIn: 'root' })
export class JobListingService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createJobListing()` */
  static readonly CreateJobListingPath = '/jobs/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createJobListing()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createJobListing$Response(params: CreateJobListing$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createJobListing(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createJobListing$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createJobListing(params: CreateJobListing$Params, context?: HttpContext): Observable<number> {
    return this.createJobListing$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateJobListingById()` */
  static readonly UpdateJobListingByIdPath = '/jobs/update/{jobId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateJobListingById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateJobListingById$Response(params: UpdateJobListingById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateJobListingById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateJobListingById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateJobListingById(params: UpdateJobListingById$Params, context?: HttpContext): Observable<void> {
    return this.updateJobListingById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `findJobsById()` */
  static readonly FindJobsByIdPath = '/jobs/find/{jobId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findJobsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findJobsById$Response(params: FindJobsById$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseJobListingResponse>> {
    return findJobsById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findJobsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findJobsById(params: FindJobsById$Params, context?: HttpContext): Observable<PageResponseJobListingResponse> {
    return this.findJobsById$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseJobListingResponse>): PageResponseJobListingResponse => r.body)
    );
  }

  /** Path part for operation `findAllJobs()` */
  static readonly FindAllJobsPath = '/jobs/find/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllJobs()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllJobs$Response(params?: FindAllJobs$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseJobListingResponse>> {
    return findAllJobs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllJobs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllJobs(params?: FindAllJobs$Params, context?: HttpContext): Observable<PageResponseJobListingResponse> {
    return this.findAllJobs$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseJobListingResponse>): PageResponseJobListingResponse => r.body)
    );
  }

  /** Path part for operation `deleteJobListingById()` */
  static readonly DeleteJobListingByIdPath = '/jobs/delete/{jobId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteJobListingById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteJobListingById$Response(params: DeleteJobListingById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteJobListingById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteJobListingById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteJobListingById(params: DeleteJobListingById$Params, context?: HttpContext): Observable<void> {
    return this.deleteJobListingById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
