package com.devportfolio.backend.blog.dto.post;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

import java.time.OffsetDateTime;

@Getter
public class PostCreateRequest {
    @NotBlank
    private String title;

    @NotBlank
    private String contentMd;

    @NotBlank
    private String excerpt;

    @NotBlank
    private String category;      // TIL/Retrospective/Thinking

    private String coverImageUrl; // optional
    private String tags;          // optional, comma-separated

    @Min(1)

    private String status;        // optional: DRAFT/PUBLISHED/ARCHIVED

    private OffsetDateTime publishedAt; // optional: 지정하지 않으면 현재 시간
}
