package com.RAS.recruitment_automation_system.joblisting;

import lombok.*;

import java.sql.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JobListingResponse {
    private int id;
    private String title;
    private String description;
    private String location;
    private String department;
    private String requirements;
    private Date postedDate;
    private Date closingDate;
}
