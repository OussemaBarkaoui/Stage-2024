package com.RAS.recruitment_automation_system.application;

import com.RAS.recruitment_automation_system.common.PageResponse;
import com.RAS.recruitment_automation_system.joblisting.JobListing;
import com.RAS.recruitment_automation_system.joblisting.JobListingRepository;
import com.RAS.recruitment_automation_system.joblisting.JobListingRequest;
import com.RAS.recruitment_automation_system.joblisting.JobListingResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.core.ApplicationMapping;
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
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final ApplicationMapper applicationMapper;
    private final JobListingRepository jobListingRepository;



    public PageResponse<ApplicationResponse> findAllApplication(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("applicationDate").descending());
        Page<Application> applicationPage = applicationRepository.findAll(pageable);
        List<ApplicationResponse> applicationResponses = applicationPage
                .stream()
                .map(applicationMapper::toApplicationResponse)
                .toList();

        return new PageResponse<>(
                applicationResponses,
                applicationPage.getNumber(),
                applicationPage.getSize(),
                applicationPage.getTotalElements(),
                applicationPage.getTotalPages(),
                applicationPage.isFirst(),
                applicationPage.isLast()
        );
    }
    public PageResponse<ApplicationResponse> findApplicationById(int appId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("applicationDate").descending());
        Page<Application> applicationPage = applicationRepository.findAllByAppId(appId, pageable);
        List<ApplicationResponse> applicationResponses = applicationPage
                .stream()
                .map(applicationMapper::toApplicationResponse)
                .toList();

        return new PageResponse<>(
                applicationResponses,
                applicationPage.getNumber(),
                applicationPage.getSize(),
                applicationPage.getTotalElements(),
                applicationPage.getTotalPages(),
                applicationPage.isFirst(),
                applicationPage.isLast()
        );
    }
    public void updateApplicationById(Integer appId, ApplicationRequest request) {
        Application application = applicationRepository.findById(appId)
                .orElseThrow(() -> new RuntimeException("application not found"));
        application.setCandidateName(request.candidateName());
        application.setCandidateEmail(request.candidateEmail());
        application.setResumeUrl(request.resumeUrl());
        application.setCoverLetter(request.coverLetter());
        application.setStatus(request.status());
        application.setApplicationDate(request.applicationDate());
        application.setJobListing(jobListingRepository.findById(request.jobId()).get());
        applicationRepository.save(application);

    }
    public void deleteApplicationById(Integer appId) {

        applicationRepository.deleteById(appId);
    }
    public void updateCandidateStatus(Integer appId,ApplicationRequest request){
        Application application =applicationRepository.findById(appId)
                .orElseThrow(()-> new RuntimeException("application not find"));
        application.setStatus(request.status());
        applicationRepository.save(application);
    }


    public Integer createApplication(Integer jobId, ApplicationRequest request) {

        JobListing jobListing = jobListingRepository.findById(jobId).get();
        Application application = new Application();
        application.setCandidateName(request.candidateName());
        application.setCandidateEmail(request.candidateEmail());
        application.setResumeUrl(request.resumeUrl());
        application.setCoverLetter(request.coverLetter());
        application.setStatus(request.status());
        application.setApplicationDate(request.applicationDate());
        application.setJobListing(jobListing);
        applicationRepository.save(application);
        return application.getId();
    }
}