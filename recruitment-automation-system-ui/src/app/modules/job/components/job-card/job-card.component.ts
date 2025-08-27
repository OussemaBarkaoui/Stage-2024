import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { JobListingResponse } from '../../../../services/models/job-listing-response';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {
  @Output() apply: EventEmitter<number> = new EventEmitter<number>();
  @Input() job: JobListingResponse = {};

  constructor(private router: Router) {}

  applyForJob() {
    if (this.job.id) {
      this.apply.emit(this.job.id);
      this.router.navigate(['/apply-manage', this.job.id]);
    } else {
      console.error('Job ID is not available.');
    }
  }
}
