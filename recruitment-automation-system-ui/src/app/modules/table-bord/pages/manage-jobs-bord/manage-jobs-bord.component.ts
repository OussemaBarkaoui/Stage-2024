import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { JobListingService } from '../../../../services/services/job-listing.service';

import {JobListingRequest} from "../../../../services/models/job-listing-request";

@Component({
  selector: 'app-manage-jobs-bord',
  templateUrl: './manage-jobs-bord.component.html',
  styleUrls: ['./manage-jobs-bord.component.css']
})
export class ManageJobsBordComponent {

      savejobRequest : JobListingRequest ={
      title: '',
      description: '',
      location: '',
      department: '',
      requirements: '',
      postedDate: '',
      closingDate: '',
    }
    errorMsg: Array<string> = [];
  constructor(
    private jobService: JobListingService,
    private router: Router
  ) {}
    savejobs() {
      this.errorMsg = [];
      this.jobService.createJobListing(
          {body: this.savejobRequest
          }).subscribe(
          {next: () => {
            this.router.navigate(['jobsBord']);
          },
          error: (err) => {
            this.errorMsg = err.error.validationErrors;
          }}
      )
    }
}
