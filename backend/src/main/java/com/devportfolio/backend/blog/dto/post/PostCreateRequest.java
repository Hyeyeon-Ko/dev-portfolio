package com.devportfolio.backend.blog.dto.post;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

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

    @Min(1)
    private Integer readTimeMin;  // optional

    private String status;        // optional: DRAFT/PUBLISHED/ARCHIVED
}
