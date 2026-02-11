package com.devportfolio.backend.blog.dto.comment;

import lombok.Getter;

@Getter
public class CommentCreateRequest {
    private String authorName; // optional (null이면 프론트에서 익명 처리)
    private String content;
}
