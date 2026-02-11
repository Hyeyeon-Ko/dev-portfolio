package com.devportfolio.backend.blog.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.OffsetDateTime;

@Entity
@Table(name = "post_comments")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PostComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="post_id", nullable = false)
    private Long postId;

    @Column(name="author_name", length = 50)
    private String authorName; // NULL 가능 (프론트에서 "익명" 처리 가능)

    @Column(columnDefinition = "text", nullable = false)
    private String content;

    @Column(name="created_at", nullable = false)
    private OffsetDateTime createdAt;

    @PrePersist
    void onCreate() {
        if (createdAt == null) createdAt = OffsetDateTime.now();
    }
}
