package com.devportfolio.backend.blog.dto.comment;

import lombok.Builder;
import lombok.Getter;

import java.time.OffsetDateTime;

@Getter
@Builder
public class CommentItemResponse {
    private Long id;
    private String authorName;
    private String content;
    private OffsetDateTime createdAt;
}
