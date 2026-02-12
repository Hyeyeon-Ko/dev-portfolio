package com.devportfolio.backend.blog.controller;

import com.devportfolio.backend.blog.dto.common.ApiResponse;
import com.devportfolio.backend.blog.dto.common.PageResponse;
import com.devportfolio.backend.blog.dto.post.*;
import com.devportfolio.backend.blog.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/posts")
public class PostController {

    private final BlogService blogService;

    // 공개 목록 (PUBLISHED만)
    @GetMapping
    public ApiResponse<PageResponse<PostListItemResponse>> list(
            @RequestParam(required = false) String category,
            @RequestParam(required = false, name = "q") String q,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size
    ) {
        return ApiResponse.ok(blogService.listPublished(category, q, page, size));
    }

    // 상세
    @GetMapping("/{id}")
    public ApiResponse<PostDetailResponse> detail(@PathVariable Long id) {
        return ApiResponse.ok(blogService.getPublishedPost(id));
    }
}
