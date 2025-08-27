package com.RAS.recruitment_automation_system.candidate;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CandidateResponse {

    private String candidateName;
    private String candidateEmail;
    private String resumeUrl;
    private String coverLetter;
    private String status;

}
