package com.RAS.recruitment_automation_system.email;

import com.RAS.recruitment_automation_system.notification.Notification;
import lombok.Getter;

@Getter
public enum EmailTemplateName {

    ACTIVATE_ACCOUNT("activate_account");


    private final String name;

    EmailTemplateName(String name) {
        this.name = name;
    }
}