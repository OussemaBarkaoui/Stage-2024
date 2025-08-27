package com.RAS.recruitment_automation_system.joblisting;

import org.springframework.stereotype.Service;

    @Service
public class JobListingMapper {
    public JobListing toJobListing(JobListingRequest request) {

        return JobListing.builder()
                .title(request.title())
                .description(request.description())
                .location(request.location())
                .department(request.department())
                .requirements(request.requirements())
                .postedDate(request.postedDate())
                .closingDate(request.closingDate())
                .build();
    }
    public JobListingResponse toJobListingResponse(JobListing jobListing) {

        return JobListingResponse.builder()
                .id(jobListing.getId())
                .title(jobListing.getTitle())
                .description(jobListing.getDescription())
                .location(jobListing.getLocation())
                .department(jobListing.getDepartment())
                .requirements(jobListing.getRequirements())
                .postedDate(jobListing.getPostedDate())
                .closingDate(jobListing.getClosingDate())
                .build();
    }
}
