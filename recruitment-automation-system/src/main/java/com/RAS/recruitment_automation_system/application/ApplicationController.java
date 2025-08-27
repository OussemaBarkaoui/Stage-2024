package com.RAS.recruitment_automation_system.application;


import com.RAS.recruitment_automation_system.common.PageResponse;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/app")
@RequiredArgsConstructor
@Tag(name = "application")
public class ApplicationController {
    private final ApplicationService applicationService;


    @PostMapping("/create/{jobId}")
    public ResponseEntity<Integer> createApplication(
            @PathVariable Integer jobId,
            @Valid @RequestBody ApplicationRequest request) {

        return ResponseEntity.ok(applicationService.createApplication(jobId, request));
    }



    @GetMapping("/find/all")
    public ResponseEntity<PageResponse<ApplicationResponse>> findAllJobs(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size
    ) {
        return ResponseEntity.ok(applicationService.findAllApplication(page, size));
    }
    @GetMapping("/find/{appId}")
    public ResponseEntity<PageResponse<ApplicationResponse>> findJobsById(
            @PathVariable("appId") Integer appId,
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size)
    {
        PageResponse<ApplicationResponse> response = applicationService.findApplicationById(appId, page, size);

        if (response.getContent().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }

        return ResponseEntity.ok(response);
    }
    @PatchMapping("/update/{appId}")
    public ResponseEntity<Void> updateApplicationById(
            @PathVariable("appId") Integer appId,
            @Valid @RequestBody ApplicationRequest request
    ) {
        applicationService.updateApplicationById(appId, request);
        return ResponseEntity.noContent().build();
    }
    @DeleteMapping("/delete/{appId}")
    public ResponseEntity<Void> deleteApplicationById(
            @PathVariable("appId") Integer appId
    ) {
        applicationService.deleteApplicationById(appId);
        return ResponseEntity.noContent().build();
    }
    @PatchMapping("/UpdateStatus/{appId}")
    public ResponseEntity<Void> UpdateCandidateStatus(
            @PathVariable("appId") Integer appId,
            @Valid @RequestBody ApplicationRequest request
    )
    {
        applicationService.updateCandidateStatus(appId,request);
        return ResponseEntity.noContent().build();
    }
}