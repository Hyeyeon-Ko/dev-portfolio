package com.devportfolio.backend.blog.controller;

import com.devportfolio.backend.blog.dto.common.ApiResponse;
import com.devportfolio.backend.blog.dto.common.IdResponse;
import com.devportfolio.backend.blog.dto.common.PageResponse;
import com.devportfolio.backend.blog.dto.post.PostCreateRequest;
import com.devportfolio.backend.blog.dto.post.PostDetailResponse;
import com.devportfolio.backend.blog.dto.post.PostListItemResponse;
import com.devportfolio.backend.blog.dto.post.PostRequest;
import com.devportfolio.backend.blog.service.BlogService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/posts")
public class AdminPostController {

    private final BlogService blogService;

    @GetMapping
    public ApiResponse<PageResponse<PostListItemResponse>> list(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String category,
            @RequestParam(required = false, name = "q") String q,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size
    ) {
        return ApiResponse.ok(blogService.listAdmin(status, category, q, page, size));
    }

    @GetMapping("/{id}")
    public ApiResponse<PostDetailResponse> detail(@PathVariable Long id) {
        return ApiResponse.ok(blogService.getPostAdmin(id));
    }

    @PostMapping
    public ApiResponse<IdResponse> create(@Valid @RequestBody PostCreateRequest req) {
        return ApiResponse.ok(blogService.createPost(req));
    }

    @PutMapping("/{id}")
    public ApiResponse<Void> update(@PathVariable Long id, @RequestBody PostRequest req) {
        blogService.updatePost(id, req);
        return ApiResponse.ok(null);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        blogService.deletePost(id);
        return ApiResponse.ok(null);
    }
}
