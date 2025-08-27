package com.RAS.recruitment_automation_system.candidate;

import com.RAS.recruitment_automation_system.application.Application;
import org.springframework.stereotype.Service;

@Service
public class CandidateMapper {

    public CandidateResponse toCandidateResponse(Application application) {
        return CandidateResponse.builder()
                .candidateName(application.getCandidateName())
                .candidateEmail(application.getCandidateEmail())
                .resumeUrl(application.getResumeUrl())
                .coverLetter(application.getCoverLetter())
                .status(application.getStatus())

                .build();
    }
}
