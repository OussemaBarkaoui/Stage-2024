package com.RAS.recruitment_automation_system.candidate;

import com.RAS.recruitment_automation_system.application.Application;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CandidateRepository extends JpaRepository<Application,Integer>, JpaSpecificationExecutor<Application> {
    @Query("""
SELECT a
FROM Application a
WHERE a.id = :appId
""")
    Page<Application> findAllByAppId(@Param("appId") int appId, Pageable pageable);
}
