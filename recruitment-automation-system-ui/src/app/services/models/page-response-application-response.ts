/* tslint:disable */
/* eslint-disable */
import { ApplicationResponse } from '../models/application-response';
export interface PageResponseApplicationResponse {
  content?: Array<ApplicationResponse>;
  first?: boolean;
  last?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
