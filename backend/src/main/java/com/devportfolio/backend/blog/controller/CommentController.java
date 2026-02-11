package com.devportfolio.backend.blog.controller;

import com.devportfolio.backend.blog.dto.comment.CommentCreateRequest;
import com.devportfolio.backend.blog.dto.comment.CommentItemResponse;
import com.devportfolio.backend.blog.dto.common.ApiResponse;
import com.devportfolio.backend.blog.dto.common.IdResponse;
import com.devportfolio.backend.blog.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/posts/{postId}/comments")
public class CommentController {

    private final BlogService blogService;

    @GetMapping
    public ApiResponse<List<CommentItemResponse>> list(@PathVariable Long postId) {
        return ApiResponse.ok(blogService.listComments(postId));
    }

    @PostMapping
    public ApiResponse<IdResponse> create(@PathVariable Long postId, @RequestBody CommentCreateRequest req) {
        return ApiResponse.ok(blogService.addComment(postId, req));
    }
}
