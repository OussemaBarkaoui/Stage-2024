/* tslint:disable */
/* eslint-disable */
import { JobListingResponse } from '../models/job-listing-response';
export interface PageResponseJobListingResponse {
  content?: Array<JobListingResponse>;
  first?: boolean;
  last?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
