package com.RAS.recruitment_automation_system.notification;

import org.springframework.stereotype.Service;

@Service
public class NotificationMapper {
    public Notification toNotification(NotificationRequest notificationRequest) {
        return Notification.builder()
                .message(notificationRequest.message())
                .isRead(false)
                .date(notificationRequest.date())
                .build();
    }


    public NotificationResponse toNotificationResponse(Notification notification) {
        return NotificationResponse.builder()
                .id(notification.getId())
                .message(notification.getMessage())
                .isRead(notification.isRead())
                .date(notification.getDate())
                .build();
    }
}
