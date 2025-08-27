package com.RAS.recruitment_automation_system.candidate;

public record CandidateRequest(
    String candidateName,
    String candidateEmail,
    String resumeUrl,
    String status,
    String coverLetter
) {
}
