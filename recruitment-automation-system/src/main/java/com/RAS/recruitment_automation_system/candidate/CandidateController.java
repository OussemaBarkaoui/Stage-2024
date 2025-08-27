package com.RAS.recruitment_automation_system.candidate;

import com.RAS.recruitment_automation_system.common.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/candidates")

@RequiredArgsConstructor
@Tag(name = "candidates")
public class CandidateController {
        CandidateService candidateService;
        CandidateRepository candidateRepository;

        @GetMapping
        public ResponseEntity<PageResponse<CandidateResponse>> findAllCandidates(
                @RequestParam(name = "page", defaultValue = "0", required = false) int page,
                @RequestParam(name = "size", defaultValue = "10", required = false) int size
        ) {
                return ResponseEntity.ok(candidateService.findAllCandidates(page, size));
        }
        @GetMapping("/find/{candidateId}")
        public ResponseEntity<PageResponse<CandidateResponse>> findCandidatesById(
                @PathVariable("candidateId") Integer candidateId,
                @RequestParam(name = "page", defaultValue = "0", required = false) int page,
                @RequestParam(name = "size", defaultValue = "10", required = false) int size
        ) {
                return ResponseEntity.ok(candidateService.findCandidatesById(candidateId, page, size));
        }

}
