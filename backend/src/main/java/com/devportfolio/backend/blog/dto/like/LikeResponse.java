package com.devportfolio.backend.blog.dto.like;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LikeResponse {
    private int likeCount;
    private boolean liked; // 이번 요청으로 좋아요 반영 되었는지
}
