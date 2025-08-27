package com.RAS.recruitment_automation_system.usersDetail;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userDetail")
@RequiredArgsConstructor
@Tag(name = "userDetail")
public class UserDetailController {

    private final UserDetailService service;

    @PostMapping("/create")
    public ResponseEntity<Integer> create(@Valid @RequestBody UserDetailRequest request
        ,Authentication connectedUser
    ) {
        return ResponseEntity.ok(service.createUserDetail(request ,connectedUser));
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<UserDetailResponse>> findAllUsers(Authentication connectedUser) {
        List<UserDetailResponse> userDetailResponses = service.findAllUser(connectedUser);
        return ResponseEntity.ok(userDetailResponses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDetailResponse> findUserById(@PathVariable("id") Integer id) {
        UserDetailResponse userDetail = service.findUserById(id);
        return ResponseEntity.ok(userDetail);
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<Void> update(@PathVariable("id") Integer id, @Valid @RequestBody UserDetailRequest request) {
        service.updateUserDetail(id, request);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        service.deleteUserDetail(id);
        return ResponseEntity.noContent().build();
    }


}
