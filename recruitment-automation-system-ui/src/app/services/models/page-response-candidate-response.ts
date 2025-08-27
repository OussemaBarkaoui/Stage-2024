/* tslint:disable */
/* eslint-disable */
import { CandidateResponse } from '../models/candidate-response';
export interface PageResponseCandidateResponse {
  content?: Array<CandidateResponse>;
  first?: boolean;
  last?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
