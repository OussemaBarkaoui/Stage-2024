import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobListingService } from '../../../../services/services/job-listing.service';
import { JobListingRequest } from '../../../../services/models/job-listing-request';
import { JobListingResponse } from '../../../../services/models/job-listing-response';

@Component({
  selector: 'app-update-jobs-bord',
  templateUrl: './update-jobs-bord.component.html',
  styleUrls: ['./update-jobs-bord.component.css']
})
export class UpdateJobsBordComponent implements OnInit {
  jobForm: FormGroup;
  jobId: number | null = null;

  // Success/Error message variables
  message: string | null = null;
  level: 'success' | 'error' = 'success';

  constructor(
    private fb: FormBuilder,
    private jobService: JobListingService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.jobForm = this.fb.group({
      title: [''],
      description: [''],
      location: [''],
      department: [''],
      requirements: [''],
      postedDate: [''],
      closingDate: ['']
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.jobId = +params.get('id')!;
      if (this.jobId) {
        this.loadJobDetails();
      }
    });
  }

  loadJobDetails() {
    if (this.jobId) {
      this.jobService.findJobsById({
        jobId: this.jobId,
        page: 0,
        size: 1
      }).subscribe({
        next: (job) => {
          console.log('Job Response:', job);  // Log the job response
          if (job) {
            if (job.content) {
              this.jobForm.patchValue({
                title: job.content[0].title,
                description: job.content[0].description,
                location: job.content[0].location,
                department: job.content[0].department,
                requirements: job.content[0].requirements,
                postedDate: job.content[0].postedDate,
                closingDate: job.content[0].closingDate
              });
            }
          } else {
            this.message = 'Job not found';
            this.level = 'error';
          }
        },
        error: (err) => {
          console.error('Error loading job details:', err);
          this.message = 'Error loading job details';
          this.level = 'error';
        }
      });
    }
  }

  updateJob() {
    if (this.jobId && this.jobForm.valid) {
      const updatedJob: JobListingRequest = this.jobForm.value;
      this.jobService.updateJobListingById({ jobId: this.jobId, body: updatedJob }).subscribe({
        next: () => {
          this.message = 'Job updated successfully!';
          this.level = 'success';

          this.router.navigate(['jobsBord']);
        },
        error: (err) => {
          console.error('Error updating job listing:', err);
          this.message = 'Error updating job listing';
          this.level = 'error';
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['jobsBord']);
  }
}
