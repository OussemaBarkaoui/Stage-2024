package com.RAS.recruitment_automation_system.joblisting;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.sql.Date;

public record JobListingRequest(
        Integer id,
        @NotNull(message = "title cannot be null")
        @NotEmpty(message = "title cannot be null")
        String title,
        @NotNull(message = "description cannot be null")
        @NotEmpty(message = "description cannot be null")
        String description,
        @NotNull(message = "location cannot be null")
        @NotEmpty(message = "location cannot be null")
        String location,
        @NotNull(message = "department cannot be null")
        @NotEmpty(message = "department cannot be null")
        String department,
        @NotNull(message = "requirements cannot be null")
        @NotEmpty(message = "requirements cannot be null")
        String requirements,

        Date postedDate,

        Date closingDate
) {

}
