package com.devportfolio.backend.blog.repository;

import com.devportfolio.backend.blog.entity.PostLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostLikeRepository extends JpaRepository<PostLike, Long> {

    boolean existsByPostIdAndVisitorKey(Long postId, String visitorKey);
    
    long countByPostId(Long postId);
}
