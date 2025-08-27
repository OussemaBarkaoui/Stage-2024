package com.RAS.recruitment_automation_system.notification;



import java.sql.Date;

public record NotificationRequest(

         int id,

         String message,

         boolean isRead,
         Date date

) {
}
