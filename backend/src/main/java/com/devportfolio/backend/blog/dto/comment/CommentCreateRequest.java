package com.devportfolio.backend.blog.dto.comment;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class CommentCreateRequest {
    private String authorName; // optional (null이면 프론트에서 익명 처리)

    @NotBlank
    private String content;
}
