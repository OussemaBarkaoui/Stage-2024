package com.RAS.recruitment_automation_system.notification;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface NotificationRepository extends JpaRepository<Notification,Integer>, JpaSpecificationExecutor<Notification> {

    @Query("""
           SELECT n 
           FROM Notification n 
           WHERE n.id = :id
           """)
    Optional<Notification> findNotificationById(@Param("id") int id);


}
