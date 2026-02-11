package com.devportfolio.backend.blog.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.OffsetDateTime;

@Entity
@Table(name = "blog_posts")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BlogPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 200, nullable = false)
    private String title;

    @Column(name = "content_md", columnDefinition = "text", nullable = false)
    private String contentMd;

    @Column(length = 300, nullable = false)
    private String excerpt;

    @Column(length = 20, nullable = false)
    private String category; // "TIL" | "Retrospective" | "Thinking"

    @Column(length = 20, nullable = false)
    private String status; // "DRAFT" | "PUBLISHED" | "ARCHIVED"

    @Column(name = "published_at")
    private OffsetDateTime publishedAt;

    @Column(name = "cover_image_url", columnDefinition = "text")
    private String coverImageUrl;

    @Column(name = "read_time_min")
    private Integer readTimeMin;

    @Column(name = "like_count", nullable = false)
    private Integer likeCount;

    @Column(name = "comment_count", nullable = false)
    private Integer commentCount;

    @Column(name = "created_at", nullable = false)
    private OffsetDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private OffsetDateTime updatedAt;

    @PrePersist
    void onCreate() {
        OffsetDateTime now = OffsetDateTime.now();
        if (createdAt == null) createdAt = now;
        if (updatedAt == null) updatedAt = now;
        if (status == null) status = "DRAFT";
        if (likeCount == null) likeCount = 0;
        if (commentCount == null) commentCount = 0;
    }

    @PreUpdate
    void onUpdate() {
        updatedAt = OffsetDateTime.now();
    }
}
