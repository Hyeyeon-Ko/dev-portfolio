package com.devportfolio.backend.blog.dto.post;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class RelatedPostItem {
    private Long id;
    private String title;
    private String category;
    private String date;
}
