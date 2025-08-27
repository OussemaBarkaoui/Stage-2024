package com.RAS.recruitment_automation_system.joblisting;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface JobListingRepository extends JpaRepository<JobListing,Integer>, JpaSpecificationExecutor<JobListing> {

    @Query("""
SELECT j
FROM JobListing j
WHERE j.id = :jobId
""")
    Page<JobListing> findAllByJobId(@Param("jobId") int jobId, Pageable pageable);


}
