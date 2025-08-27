package com.RAS.recruitment_automation_system.auth;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {


    private final AuthenticationService service;

    @PostMapping("/register_Can")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity<?> register_Can(
            @RequestBody @Valid RegistrationRequest request) throws MessagingException {
        service.register_Can(request);

        return ResponseEntity.accepted().build();
    }
    @PostMapping("/register_Rec")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity<?> register_Rec(
            @RequestBody @Valid RegistrationRequest request) throws MessagingException {
        service.register_Rec(request);

        return ResponseEntity.accepted().build();
    }

    @PostMapping("/authenticate_Can")
    public ResponseEntity<AuthenticationResponse> authenticate_Can(
            @RequestBody @Valid AuthenticationRequest request)
    {
        return ResponseEntity.ok(service.authenticate_Can(request));
    }
    @PostMapping("/authenticate_Rec")
    public ResponseEntity<AuthenticationResponse> authenticate_Rec(
            @RequestBody @Valid AuthenticationRequest request)
    {
        return ResponseEntity.ok(service.authenticate_Rec(request));
    }

    @GetMapping("/activate-account")
    public void confirm(@RequestParam String token) throws MessagingException {
        service.activateAccount(token);
    }




}
