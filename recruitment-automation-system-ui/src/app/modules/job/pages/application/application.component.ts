import {Component, OnInit} from '@angular/core';
import {PageResponseJobListingResponse} from "../../../../services/models/page-response-job-listing-response";
import {JobListingService} from "../../../../services/services/job-listing.service";
import {Router} from "@angular/router";
import {JobListingResponse} from "../../../../services/models/job-listing-response";
import {PageResponseApplicationResponse} from "../../../../services/models/page-response-application-response";
import {ApplicationService} from "../../../../services/services/application.service";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit{
  appResponse: PageResponseApplicationResponse = {};
  page = 0;
  size = 5;
  pages: any = [];
  message = '';
  level: 'success' |'error' = 'success';

  constructor(
    private appService: ApplicationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.findAllApps();
  }

  private findAllApps() {
    this.appService.findAllJobs1({
      page: this.page,
      size: this.size
    }).subscribe({
      next:(apps)=> {
        this.appResponse = apps;
      }
    });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllApps();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllApps();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllApps();
  }

  goToLastPage() {
    this.page = this.appResponse.totalPages as number - 1;
    this.findAllApps();
  }

  goToNextPage() {
    this.page++;
    this.findAllApps();
  }

  get isLastPage() {
    return this.page === this.appResponse.totalPages as number - 1;
  }
}
