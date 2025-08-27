package com.RAS.recruitment_automation_system.application;

import com.RAS.recruitment_automation_system.joblisting.JobListing;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.sql.Date;

public record ApplicationRequest(
        Integer id,

        @NotEmpty(message = "Le nom du candidat ne peut pas être vide")
        String candidateName,

        @NotEmpty(message = "L'email du candidat ne peut pas être vide")
        String candidateEmail,

        @NotEmpty(message = "L'URL du CV ne peut pas être vide")
        String resumeUrl,

        String coverLetter,

        String status,

        Date applicationDate,

        @NotNull(message = "L'ID du job ne peut pas être nul")
        Integer jobId

) {
}
