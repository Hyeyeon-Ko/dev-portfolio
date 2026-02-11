package com.devportfolio.backend.blog.repository;

import com.devportfolio.backend.blog.entity.PostComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostCommentRepository extends JpaRepository<PostComment, Long> {

    List<PostComment> findByPostIdOrderByIdAsc(Long postId);
    
    long countByPostId(Long postId);
}
