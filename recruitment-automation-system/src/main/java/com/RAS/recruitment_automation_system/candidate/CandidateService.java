package com.RAS.recruitment_automation_system.candidate;

import com.RAS.recruitment_automation_system.application.Application;
import com.RAS.recruitment_automation_system.application.ApplicationRepository;
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
public class CandidateService {
    CandidateResponse candidateResponse;

    private final CandidateRepository candidateRepository;
    private final ApplicationRepository applicationRepository;
    private final CandidateMapper candidateMapper;


    public PageResponse<CandidateResponse> findAllCandidates(int page, int size) {

        Pageable pageable = PageRequest.of(page, size, Sort.by("CandidateName"));
        Page<Application> candidatePage = candidateRepository.findAll(pageable);

        List<CandidateResponse> candidateResponseList = candidatePage
                .stream()
                .map(candidateMapper::toCandidateResponse)
                .toList();
        return PageResponse.<CandidateResponse>builder()
                .content(candidateResponseList)
                .number(candidatePage.getNumber())
                .size(candidatePage.getSize())
                .totalElements(candidatePage.getTotalElements())
                .totalPages(candidatePage.getTotalPages())
                .first(candidatePage.isFirst())
                .last(candidatePage.isLast())
                .build();
    }

    public PageResponse<CandidateResponse> findCandidatesById(Integer candidateId, int page, int size) {

        Pageable pageable = PageRequest.of(page, size, Sort.by("CandidateName"));
        Page<Application> candidatePage = candidateRepository.findAllByAppId(candidateId, pageable);
        List<CandidateResponse> candidateResponseList = candidatePage
                .stream()
                .map(candidateMapper::toCandidateResponse)
                .toList();
        return PageResponse.<CandidateResponse>builder()
                .content(candidateResponseList)
                .number(candidatePage.getNumber())
                .size(candidatePage.getSize())
                .totalElements(candidatePage.getTotalElements())
                .totalPages(candidatePage.getTotalPages())
                .first(candidatePage.isFirst())
                .last(candidatePage.isLast())
                .build();
    }
}
