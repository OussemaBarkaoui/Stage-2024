/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createNotification } from '../fn/notification/create-notification';
import { CreateNotification$Params } from '../fn/notification/create-notification';
import { deleteNotification } from '../fn/notification/delete-notification';
import { DeleteNotification$Params } from '../fn/notification/delete-notification';
import { findAllNotifications } from '../fn/notification/find-all-notifications';
import { FindAllNotifications$Params } from '../fn/notification/find-all-notifications';
import { findNotificationById } from '../fn/notification/find-notification-by-id';
import { FindNotificationById$Params } from '../fn/notification/find-notification-by-id';
import { NotificationResponse } from '../models/notification-response';
import { updateIsRead } from '../fn/notification/update-is-read';
import { UpdateIsRead$Params } from '../fn/notification/update-is-read';

@Injectable({ providedIn: 'root' })
export class NotificationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findNotificationById()` */
  static readonly FindNotificationByIdPath = '/notifications/{NotifId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findNotificationById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findNotificationById$Response(params: FindNotificationById$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationResponse>> {
    return findNotificationById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findNotificationById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findNotificationById(params: FindNotificationById$Params, context?: HttpContext): Observable<NotificationResponse> {
    return this.findNotificationById$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationResponse>): NotificationResponse => r.body)
    );
  }

  /** Path part for operation `updateIsRead()` */
  static readonly UpdateIsReadPath = '/notifications/{NotifId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateIsRead()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateIsRead$Response(params: UpdateIsRead$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationResponse>> {
    return updateIsRead(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateIsRead$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateIsRead(params: UpdateIsRead$Params, context?: HttpContext): Observable<NotificationResponse> {
    return this.updateIsRead$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationResponse>): NotificationResponse => r.body)
    );
  }

  /** Path part for operation `deleteNotification()` */
  static readonly DeleteNotificationPath = '/notifications/{NotifId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteNotification()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNotification$Response(params: DeleteNotification$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteNotification(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteNotification$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNotification(params: DeleteNotification$Params, context?: HttpContext): Observable<void> {
    return this.deleteNotification$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createNotification()` */
  static readonly CreateNotificationPath = '/notifications/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createNotification()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createNotification$Response(params: CreateNotification$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createNotification(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createNotification$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createNotification(params: CreateNotification$Params, context?: HttpContext): Observable<number> {
    return this.createNotification$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findAllNotifications()` */
  static readonly FindAllNotificationsPath = '/notifications/findAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllNotifications()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllNotifications$Response(params?: FindAllNotifications$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationResponse>> {
    return findAllNotifications(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllNotifications$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllNotifications(params?: FindAllNotifications$Params, context?: HttpContext): Observable<NotificationResponse> {
    return this.findAllNotifications$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationResponse>): NotificationResponse => r.body)
    );
  }

}
