package com.RAS.recruitment_automation_system.usersDetail;



import com.RAS.recruitment_automation_system.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;
import java.util.Optional;

public interface UserDetailRepository extends JpaRepository<UserDetail,Integer>, JpaSpecificationExecutor<UserDetail> {

    @Query("""
    SELECT ud, u 
    FROM UserDetail ud 
    JOIN ud.user u 
    WHERE u.id = :userId
    """)
    List<UserDetail> findUserDetailsAndUserByUserId(@Param("userId") Integer userId);

}
