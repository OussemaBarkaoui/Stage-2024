import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../../../../services/services/application.service';
import { NotificationService } from '../../../../services/services/notification.service'; // Importer le service de notification
import { ApplicationRequest } from '../../../../services/models/application-request';
import { JobListingResponse } from '../../../../services/models/job-listing-response';
import { CreateApplication$Params } from '../../../../services/fn/application/create-application';
import {CreateNotification$Params} from "../../../../services/fn/notification/create-notification";

@Component({
  selector: 'app-apply-manage',
  templateUrl: './apply-manage.component.html',
  styleUrls: ['./apply-manage.component.css']
})
export class ApplyManageComponent implements OnInit {
  jobId: number | null = null;
  candidateName: string = '';
  candidateEmail: string = '';
  resumeUrl: string = '';
  coverLetter: string = '';
  status: string = 'preselection';

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private applicationService: ApplicationService,
      private notificationService: NotificationService // Injecter le service de notification
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const jobIdParam = params.get('job_id');
      if (jobIdParam) {
        this.jobId = Number(jobIdParam);
        console.log('Job ID:', this.jobId);
      } else {
        console.error('Job ID parameter is missing.');
      }
    });
  }

  submitApplication() {
    if (this.jobId) {
      const applicationRequest: ApplicationRequest = {
        candidateName: this.candidateName,
        candidateEmail: this.candidateEmail,
        resumeUrl: this.resumeUrl,
        coverLetter: this.coverLetter,
        status: this.status,
        jobId: this.jobId
      };

      const params: CreateApplication$Params = {
        jobId: this.jobId,
        body: applicationRequest
      };

      this.applicationService.createApplication(params).subscribe(
          response => {
            console.log('Application created successfully:', response);

            // Créer la notification après avoir réussi à créer l'application
            this.sendNotification();
            this.router.navigate(['/jobs']);
          },
          error => {
            console.error('Error creating application:', error);
          }
      );
    } else {
      console.error('Job ID is not available.');
    }
  }

  sendNotification() {
    const notificationRequest = {
      message: 'Application created successfully',
      isRead: false,  // Assurez-vous que ce champ est défini comme Boolean

    };

    const params: CreateNotification$Params = {
      body: notificationRequest
    };

    this.notificationService.createNotification(params).subscribe(
        response => {
          console.log('Notification created successfully:', response);
        },
        error => {
          console.error('Error creating notification:', error);
        }
    );
  }

}
