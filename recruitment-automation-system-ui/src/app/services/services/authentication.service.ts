/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authenticateCan } from '../fn/authentication/authenticate-can';
import { AuthenticateCan$Params } from '../fn/authentication/authenticate-can';
import { authenticateRec } from '../fn/authentication/authenticate-rec';
import { AuthenticateRec$Params } from '../fn/authentication/authenticate-rec';
import { AuthenticationResponse } from '../models/authentication-response';
import { confirm } from '../fn/authentication/confirm';
import { Confirm$Params } from '../fn/authentication/confirm';
import { registerCan } from '../fn/authentication/register-can';
import { RegisterCan$Params } from '../fn/authentication/register-can';
import { registerRec } from '../fn/authentication/register-rec';
import { RegisterRec$Params } from '../fn/authentication/register-rec';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `registerRec()` */
  static readonly RegisterRecPath = '/auth/register_Rec';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerRec()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerRec$Response(params: RegisterRec$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return registerRec(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerRec$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerRec(params: RegisterRec$Params, context?: HttpContext): Observable<{
}> {
    return this.registerRec$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `registerCan()` */
  static readonly RegisterCanPath = '/auth/register_Can';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerCan()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerCan$Response(params: RegisterCan$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return registerCan(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerCan$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerCan(params: RegisterCan$Params, context?: HttpContext): Observable<{
}> {
    return this.registerCan$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `authenticateRec()` */
  static readonly AuthenticateRecPath = '/auth/authenticate_Rec';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticateRec()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticateRec$Response(params: AuthenticateRec$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return authenticateRec(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticateRec$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticateRec(params: AuthenticateRec$Params, context?: HttpContext): Observable<AuthenticationResponse> {
    return this.authenticateRec$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
    );
  }

  /** Path part for operation `authenticateCan()` */
  static readonly AuthenticateCanPath = '/auth/authenticate_Can';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticateCan()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticateCan$Response(params: AuthenticateCan$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return authenticateCan(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticateCan$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticateCan(params: AuthenticateCan$Params, context?: HttpContext): Observable<AuthenticationResponse> {
    return this.authenticateCan$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
    );
  }

  /** Path part for operation `confirm()` */
  static readonly ConfirmPath = '/auth/activate-account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confirm()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirm$Response(params: Confirm$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return confirm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `confirm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirm(params: Confirm$Params, context?: HttpContext): Observable<void> {
    return this.confirm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
