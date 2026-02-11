package com.devportfolio.backend.blog.controller;

import com.devportfolio.backend.blog.dto.common.ApiResponse;
import com.devportfolio.backend.blog.dto.like.LikeRequest;
import com.devportfolio.backend.blog.dto.like.LikeResponse;
import com.devportfolio.backend.blog.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/posts/{postId}/likes")
public class LikeController {

    private final BlogService blogService;

    @PostMapping
    public ApiResponse<LikeResponse> like(@PathVariable Long postId, @RequestBody LikeRequest req) {
        return ApiResponse.ok(blogService.like(postId, req.getVisitorKey()));
    }
}
