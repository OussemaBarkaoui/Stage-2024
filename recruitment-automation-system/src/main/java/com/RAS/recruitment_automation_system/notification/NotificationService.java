package com.RAS.recruitment_automation_system.notification;

import com.RAS.recruitment_automation_system.email.EmailService;
import com.RAS.recruitment_automation_system.user.User;
import jakarta.mail.MessagingException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class NotificationService{
    public final NotificationRepository notificationRepository;
    public final NotificationMapper notificationMapper;

    private final EmailService emailService;


    public Integer createNotification(NotificationRequest request, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Notification notification = notificationMapper.toNotification(request);
        notification.setUser(user);
        notificationRepository.save(notification);
        return notification.getId();
    }

    @Async
    public void sendNotificationEmail(NotificationRequest request, Authentication connectedUser) throws MessagingException, MessagingException {
        User user = (User) connectedUser.getPrincipal();
        String to = user.getEmail(); // Ou une autre adresse e-mail à laquelle tu souhaites envoyer la notification
        String subject = "New Notification";
        String message = "You have a new notification:\n\n" +
                "Message: " + request.message() + "\n" +
                "Date: " + new Date(); // La date actuelle

        emailService.sendNotificationEmail(to, subject, message);
    }
    public NotificationResponse findAllNotifications(Authentication connectedUser) {
        User user = ((User) connectedUser.getPrincipal());
        Notification notification = notificationRepository.findNotificationById(user.getId()).get();
        return notificationMapper.toNotificationResponse(notification);
    }


    public NotificationResponse findNotificationById(Integer notifId) {
        return notificationRepository
                .findNotificationById(notifId)
                .map(notificationMapper::toNotificationResponse)
                .orElseThrow(() -> new EntityNotFoundException("No Notification found with ID:: " + notifId));
    }


    public NotificationResponse updateIsRead(Integer notifId) {
        Notification notification = notificationRepository
                .findNotificationById(notifId)
                .orElseThrow(() -> new EntityNotFoundException("No Notification found with ID:: " + notifId));
        notification.setRead(true);
        notificationRepository.save(notification);
        return notificationMapper.toNotificationResponse(notification);
    }

    public void deleteNotification(Integer notifId) {
        notificationRepository
                .findNotificationById(notifId)
                .ifPresent(notificationRepository::delete);
    }


}
