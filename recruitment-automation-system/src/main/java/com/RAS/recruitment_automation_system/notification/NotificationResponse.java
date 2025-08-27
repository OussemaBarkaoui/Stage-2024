package com.RAS.recruitment_automation_system.notification;

import lombok.*;

import java.sql.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NotificationResponse {

    private int id;
    private String message;
    private boolean isRead;
    private Date date;

}
