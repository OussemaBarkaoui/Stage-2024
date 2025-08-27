package com.RAS.recruitment_automation_system.application;

import com.RAS.recruitment_automation_system.joblisting.JobListing;
import lombok.*;

import java.sql.Date;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ApplicationResponse {
    private Integer id;
    private String candidateName;
    private String candidateEmail;
    private String resumeUrl;
    private String coverLetter;
    private String status;
    private Date applicationDate;


}