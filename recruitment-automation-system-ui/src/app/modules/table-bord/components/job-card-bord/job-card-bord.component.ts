import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JobListingResponse} from "../../../../services/models/job-listing-response";
import {Router} from "@angular/router";
import {JobListingService} from "../../../../services/services/job-listing.service";

@Component({
  selector: 'app-job-card-bord',
  templateUrl: './job-card-bord.component.html',
  styleUrls: ['./job-card-bord.component.css']
})
export class JobCardBordComponent {
//  @Output() apply: EventEmitter<number> = new EventEmitter<number>();
  @Input() job: JobListingResponse = {};



  constructor(private router: Router,
              private jobService: JobListingService) {}

  update() {
    this.router.navigate(['edit-job', this.job.id]);
  }

  delete() {
    this.jobService.deleteJobListingById({
      jobId: this.job.id!

    })
        .subscribe({
      next: () => {
        this.router.navigate(['jobsBord']);
      },
      error: (err) => {
        console.error('Error deleting job listing:', err);

      }
    });
  }
}
