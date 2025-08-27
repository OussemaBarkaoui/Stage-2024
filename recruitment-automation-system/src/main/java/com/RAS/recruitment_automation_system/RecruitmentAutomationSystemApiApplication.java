package com.RAS.recruitment_automation_system;

import com.RAS.recruitment_automation_system.role.Role;
import com.RAS.recruitment_automation_system.role.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
@EnableAsync
public class RecruitmentAutomationSystemApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecruitmentAutomationSystemApiApplication.class, args);
	}

	@Bean
	public CommandLineRunner runner(RoleRepository roleRepository) {
		return args -> {
			if (roleRepository.findByName("CANDIDATE").isEmpty()) {
				roleRepository.save(Role.builder().name("CANDIDATE").build());
			}
			if (roleRepository.findByName("RECRUITER").isEmpty()) {
				roleRepository.save(Role.builder().name("RECRUITER").build());
			}
		};
	}


}
