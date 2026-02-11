package com.devportfolio.backend.blog.repository;

import com.devportfolio.backend.blog.entity.BlogPost;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {

    Page<BlogPost> findByStatusOrderByPublishedAtDesc(String status, Pageable pageable);

    Page<BlogPost> findByStatusAndCategoryOrderByPublishedAtDesc(String status, String category, Pageable pageable);

    Page<BlogPost> findByStatusAndTitleContainingIgnoreCaseOrStatusAndExcerptContainingIgnoreCase(
            String status1, String titleQ,
            String status2, String excerptQ,
            Pageable pageable
    );

    Page<BlogPost> findByStatusAndCategoryAndTitleContainingIgnoreCaseOrStatusAndCategoryAndExcerptContainingIgnoreCase(
            String status1, String category1, String titleQ,
            String status2, String category2, String excerptQ,
            Pageable pageable
    );
}
