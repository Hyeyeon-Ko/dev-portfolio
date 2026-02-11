package com.devportfolio.backend.blog.dto.like;

import lombok.Getter;

@Getter
public class LikeRequest {
    private String visitorKey; // 프론트에서 UUID 생성해서 localStorage에 저장 후 전송
}
