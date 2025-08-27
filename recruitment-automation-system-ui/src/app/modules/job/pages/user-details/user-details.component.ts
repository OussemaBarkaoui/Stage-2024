import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailService } from '../../../../services/services/user-detail.service'; // Service généré par OpenAPI
import { UserDetailRequest } from '../../../../services/models/user-detail-request';
import { UserDetailResponse } from "../../../../services/models/user-detail-response"; // Modèle pour la réponse

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetail: UserDetailRequest = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: ''
  };

  userDetailResponse: UserDetailResponse = {
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: ''
  };

  constructor(
    private router: Router,
    private userDetailService: UserDetailService
  ) {}

  ngOnInit(): void {
    this.loadUserDetails();
  }

  saveUserDetail() {
    this.userDetailService.create$Response({
      body: this.userDetail
    }).subscribe({
      next: (response) => {
        console.log('User details updated successfully!', response);
        this.loadUserDetails();
      },
      error: (error) => {
        console.error('Error updating user details', error);
      }
    });
  }

  private loadUserDetails() {
    this.userDetailService.findAllUsers().subscribe({
      next: (response) => {
        console.log('API response:', response);
        if (response.length > 0) {
          this.userDetailResponse = response[0];
        }
      },
      error: (error) => {
        console.error('Error loading user details', error);
      }
    });
  }



}
