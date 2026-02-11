package com.devportfolio.backend.blog.dto.post;

import lombok.Getter;

@Getter
public class PostRequest {
    private String title;
    private String contentMd;
    private String excerpt;
    private String category;      // TIL/Retrospective/Thinking
    private String coverImageUrl; // optional
    private Integer readTimeMin;  // optional
    private String status;        // optional: DRAFT/PUBLISHED/ARCHIVED
}
