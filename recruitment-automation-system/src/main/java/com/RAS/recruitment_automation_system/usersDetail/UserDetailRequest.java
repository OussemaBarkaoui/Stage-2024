package com.RAS.recruitment_automation_system.usersDetail;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


public record UserDetailRequest(
    Integer id,
    @NotNull(message = "100")
    @NotEmpty(message = "100")
    String firstName,
    @NotNull(message = "101")
    @NotEmpty(message = "101")
    String lastName,
    @NotNull(message = "102")
    @NotEmpty(message = "102")
    String phoneNumber,
    @NotNull(message = "103")
    @NotEmpty(message = "103")
    String address
) {

}
