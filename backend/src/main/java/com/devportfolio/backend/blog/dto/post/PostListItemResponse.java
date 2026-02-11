package com.devportfolio.backend.blog.dto.post;

import lombok.Builder;
import lombok.Getter;

import java.time.OffsetDateTime;

@Getter
@Builder
public class PostListItemResponse {
    private Long id;
    private String title;
    private String excerpt;
    private String category;
    private OffsetDateTime publishedAt;
    private String coverImageUrl;
    private Integer readTimeMin;
    private Integer likeCount;
    private Integer commentCount;
}
