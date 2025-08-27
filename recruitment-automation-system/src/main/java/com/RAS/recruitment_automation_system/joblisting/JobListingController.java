package com.RAS.recruitment_automation_system.joblisting;

import com.RAS.recruitment_automation_system.common.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/jobs")
@RequiredArgsConstructor
@Tag(name = "JobListing")
public class JobListingController {

    private final JobListingService service;
    @PostMapping("/create")
    public ResponseEntity<Integer> createJobListing(
            @Valid @RequestBody JobListingRequest request
    ) {
        return ResponseEntity.ok(service.createJobListing(request));
    }
    @GetMapping("/find/all")
    public ResponseEntity<PageResponse<JobListingResponse>> findAllJobs(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size
    ) {
        return ResponseEntity.ok(service.findAllJobs(page, size));
    }
    @GetMapping("/find/{jobId}")
    public ResponseEntity<PageResponse<JobListingResponse>> findJobsById(
            @PathVariable("jobId") Integer jobId,
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size)
    {
        PageResponse<JobListingResponse> response = service.findJobsById(jobId, page, size);

        if (response.getContent().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }

        return ResponseEntity.ok(response);
    }
    @PatchMapping("/update/{jobId}")
    public ResponseEntity<Void> updateJobListingById(
            @PathVariable("jobId") Integer jobId,
            @Valid @RequestBody JobListingRequest request
    ) {
        service.updateJobListingById(jobId, request);
        return ResponseEntity.noContent().build();
    }
    @DeleteMapping("/delete/{jobId}")
    public ResponseEntity<Void> deleteJobListingById(
            @PathVariable("jobId") Integer jobId
    ) {
        service.deleteJobListingById(jobId);
        return ResponseEntity.noContent().build();
    }



}
