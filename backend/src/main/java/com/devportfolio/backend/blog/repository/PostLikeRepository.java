package com.devportfolio.backend.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devportfolio.backend.blog.entity.PostLike;

public interface PostLikeRepository extends JpaRepository<PostLike, Long> {

    boolean existsByPostIdAndVisitorKey(Long postId, String visitorKey);
    
    long countByPostId(Long postId);

    long deleteByPostId(Long postId);
}
