/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NotificationResponse } from '../../models/notification-response';

export interface UpdateIsRead$Params {
  NotifId: number;
}

export function updateIsRead(http: HttpClient, rootUrl: string, params: UpdateIsRead$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationResponse>> {
  const rb = new RequestBuilder(rootUrl, updateIsRead.PATH, 'put');
  if (params) {
    rb.path('NotifId', params.NotifId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<NotificationResponse>;
    })
  );
}

updateIsRead.PATH = '/notifications/{NotifId}';
