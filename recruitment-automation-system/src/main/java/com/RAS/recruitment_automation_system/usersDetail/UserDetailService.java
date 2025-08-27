package com.RAS.recruitment_automation_system.usersDetail;

import com.RAS.recruitment_automation_system.user.User;
import com.RAS.recruitment_automation_system.user.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class UserDetailService {

    private final UserDetailRepository repository;
    private final UserDetailMapper mapper;

    private final UserRepository userRepository;


    public Integer createUserDetail(UserDetailRequest request, Authentication connectedUser) {
        User user = ((User) connectedUser.getPrincipal());
        UserDetail userDetail = mapper.toUserDetail(request);
        userDetail.setUser(user);
        repository.save(userDetail);
       return userDetail.getId();
    }





    public UserDetailResponse findUserById(Integer id) {
        UserDetail userDetail = repository.findById(id).get();
        return mapper.toUserDetailResponse(userDetail);
    }

    public void updateUserDetail(Integer id, UserDetailRequest request) {

        UserDetail userDetail = repository.findById(id).get();
        userDetail.setFirstName(request.firstName());
        userDetail.setLastName(request.lastName());
        userDetail.setPhoneNumber(request.phoneNumber());
        userDetail.setAddress(request.address());
    }

    public void deleteUserDetail(Integer id) {

        repository.deleteById(id);
    }

    public List<UserDetailResponse> findAllUser(Authentication connectedUser) {
        User user = ((User) connectedUser.getPrincipal());
        List<UserDetail> userDetailList = repository.findUserDetailsAndUserByUserId(user.getId());
        return userDetailList.stream().map(mapper::toUserDetailResponse).collect(Collectors.toList());
    }
}
