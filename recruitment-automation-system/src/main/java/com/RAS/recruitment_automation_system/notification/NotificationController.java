package com.RAS.recruitment_automation_system.notification;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notifications")
@RequiredArgsConstructor
@Tag(name = "Notification")
public class NotificationController {
    private final NotificationService notificationService;
    @PostMapping("/create")
    public ResponseEntity<Integer> createNotification(
            @Valid @RequestBody NotificationRequest request,
            Authentication connectedUser
    ) throws MessagingException {

        Integer notificationId = notificationService.createNotification(request, connectedUser);


        notificationService.sendNotificationEmail(request, connectedUser);

        return ResponseEntity.ok(notificationId);
    }

    @GetMapping("/findAll")
    public  ResponseEntity<NotificationResponse> findAllNotifications(Authentication connectedUser) {
        return ResponseEntity.ok(notificationService.findAllNotifications(connectedUser));
    }

    @GetMapping("/{NotifId}")
    public ResponseEntity<NotificationResponse> findNotificationById(@PathVariable("NotifId") Integer NotifId) {
        return ResponseEntity.ok(notificationService.findNotificationById(NotifId));
    }

    @PutMapping("/{NotifId}")
    public ResponseEntity<NotificationResponse> updateIsRead(@PathVariable("NotifId") Integer NotifId) {
        return ResponseEntity.ok(notificationService.updateIsRead(NotifId));
    }
    @DeleteMapping("/{NotifId}")
    public ResponseEntity<Void> deleteNotification(@PathVariable("NotifId") Integer NotifId) {
        notificationService.deleteNotification(NotifId);
        return ResponseEntity.noContent().build();
    }


}
