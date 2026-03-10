package com.devportfolio.backend.blog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devportfolio.backend.blog.entity.PostComment;

public interface PostCommentRepository extends JpaRepository<PostComment, Long> {

    List<PostComment> findByPostIdOrderByIdAsc(Long postId);

    List<PostComment> findByPostIdAndStatusOrderByIdAsc(Long postId, String status);

    long countByPostId(Long postId);

    long deleteByPostId(Long postId);
}
