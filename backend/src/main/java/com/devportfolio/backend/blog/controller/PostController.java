package com.devportfolio.backend.blog.controller;

import com.devportfolio.backend.blog.dto.common.ApiResponse;
import com.devportfolio.backend.blog.dto.common.IdResponse;
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
        return ApiResponse.ok(blogService.getPost(id));
    }

    // 생성 (지금은 인증 없이 열려있음 -> 나중에 Admin Key 방식으로 막자)
    @PostMapping
    public ApiResponse<IdResponse> create(@RequestBody PostRequest req) {
        return ApiResponse.ok(blogService.createPost(req));
    }

    // 수정
    @PutMapping("/{id}")
    public ApiResponse<Void> update(@PathVariable Long id, @RequestBody PostRequest req) {
        blogService.updatePost(id, req);
        return ApiResponse.ok(null);
    }

    // 삭제
    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        blogService.deletePost(id);
        return ApiResponse.ok(null);
    }
}
