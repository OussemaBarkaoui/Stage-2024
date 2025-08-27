package com.RAS.recruitment_automation_system.joblisting;

import com.RAS.recruitment_automation_system.common.PageResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class JobListingService {
    private final JobListingRepository jobListingRepository;

    private final JobListingMapper jobListingMapper;
    public Integer createJobListing(JobListingRequest request) {
        JobListing jobListing = jobListingMapper.toJobListing(request);

        return jobListingRepository.save(jobListing).getId();
    }

    public PageResponse<JobListingResponse> findAllJobs(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("postedDate").descending());
        Page<JobListing> jobListingPage = jobListingRepository.findAll(pageable);
        List<JobListingResponse> jobListingResponses = jobListingPage
                .stream()
                .map(jobListingMapper::toJobListingResponse)
                .toList();

        return new PageResponse<>(
                jobListingResponses,
                jobListingPage.getNumber(),
                jobListingPage.getSize(),
                jobListingPage.getTotalElements(),
                jobListingPage.getTotalPages(),
                jobListingPage.isFirst(),
                jobListingPage.isLast()
        );
    }

    public PageResponse<JobListingResponse> findJobsById(int jobId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("postedDate").descending());
        Page<JobListing> jobListingPage = jobListingRepository.findAllByJobId(jobId, pageable);
        List<JobListingResponse> jobListingResponses = jobListingPage
                .stream()
                .map(jobListingMapper::toJobListingResponse)
                .toList();

        return new PageResponse<>(
                jobListingResponses,
                jobListingPage.getNumber(),
                jobListingPage.getSize(),
                jobListingPage.getTotalElements(),
                jobListingPage.getTotalPages(),
                jobListingPage.isFirst(),
                jobListingPage.isLast()
        );
    }


    public void updateJobListingById(Integer jobId, JobListingRequest request) {
        JobListing jobListing = jobListingRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job listing not found"));
        jobListing.setTitle(request.title());
        jobListing.setDescription(request.description());
        jobListing.setLocation(request.location());
        jobListing.setDepartment(request.department());
        jobListing.setRequirements(request.requirements());
        jobListing.setClosingDate(request.postedDate());
        jobListing.setPostedDate(request.closingDate());
        jobListingRepository.save(jobListing);

    }

    public void deleteJobListingById(Integer jobId) {

        jobListingRepository.deleteById(jobId);
    }
}
