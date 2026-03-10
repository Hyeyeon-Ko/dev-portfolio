package com.devportfolio.backend.blog.controller;

import com.devportfolio.backend.blog.dto.comment.CommentItemResponse;
import com.devportfolio.backend.blog.dto.common.ApiResponse;
import com.devportfolio.backend.blog.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin")
public class AdminCommentController {

    private final BlogService blogService;

    @GetMapping("/posts/{postId}/comments/pending")
    public ApiResponse<List<CommentItemResponse>> listPending(@PathVariable Long postId) {
        return ApiResponse.ok(blogService.listPendingComments(postId));
    }

    @PutMapping("/comments/{id}/approve")
    public ApiResponse<Void> approve(@PathVariable Long id) {
        blogService.approveComment(id);
        return ApiResponse.ok(null);
    }

    @DeleteMapping("/comments/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        blogService.deleteComment(id);
        return ApiResponse.ok(null);
    }
}
