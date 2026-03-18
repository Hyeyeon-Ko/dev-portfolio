package com.devportfolio.backend.config;

import com.devportfolio.backend.blog.dto.common.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @GetMapping("/verify")
    public ApiResponse<Void> verify() {
        return ApiResponse.ok(null);
    }
}
