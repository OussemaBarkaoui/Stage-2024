import {Component, OnInit} from '@angular/core';
import {PageResponseJobListingResponse} from "../../../../services/models/page-response-job-listing-response";
import {JobListingService} from "../../../../services/services/job-listing.service";
import {Router} from "@angular/router";
import {JobListingResponse} from "../../../../services/models/job-listing-response";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit{
  jobResponse: PageResponseJobListingResponse = {};
  page = 0;
  size = 5;
  pages: any = [];
  message = '';
  level: 'success' |'error' = 'success';

  constructor(
    private jobService: JobListingService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.findAllJobs();
  }

  private findAllJobs() {
    this.jobService.findAllJobs({
      page: this.page,
      size: this.size
    }).subscribe({
      next:(jobs)=> {
        this.jobResponse = jobs;
      }
    });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllJobs();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllJobs();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllJobs();
  }

  goToLastPage() {
    this.page = this.jobResponse.totalPages as number - 1;
    this.findAllJobs();
  }

  goToNextPage() {
    this.page++;
    this.findAllJobs();
  }

  get isLastPage() {
    return this.page === this.jobResponse.totalPages as number - 1;
  }



  displayBookDetails(job: JobListingResponse) {
    this.router.navigate(['jobs', 'details', job.id]);
  }


}
