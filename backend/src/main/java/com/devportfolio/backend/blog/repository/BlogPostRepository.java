package com.devportfolio.backend.blog.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.devportfolio.backend.blog.entity.BlogPost;

public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {

    Page<BlogPost> findByStatusOrderByPublishedAtDesc(String status, Pageable pageable);

    Page<BlogPost> findByStatusAndCategoryOrderByPublishedAtDesc(String status, String category, Pageable pageable);

    // Admin list (all statuses)
    Page<BlogPost> findAllByOrderByUpdatedAtDesc(Pageable pageable);

    Page<BlogPost> findByStatusOrderByUpdatedAtDesc(String status, Pageable pageable);

    Page<BlogPost> findByCategoryOrderByUpdatedAtDesc(String category, Pageable pageable);

    Page<BlogPost> findByStatusAndCategoryOrderByUpdatedAtDesc(String status, String category, Pageable pageable);

    @Query("""
        SELECT p FROM BlogPost p
        WHERE (LOWER(p.title) LIKE LOWER(CONCAT('%', :q, '%'))
               OR LOWER(p.excerpt) LIKE LOWER(CONCAT('%', :q, '%')))
        ORDER BY p.updatedAt DESC
    """)
    Page<BlogPost> searchAll(@Param("q") String q, Pageable pageable);

    @Query("""
        SELECT p FROM BlogPost p
        WHERE p.category = :category
          AND (LOWER(p.title) LIKE LOWER(CONCAT('%', :q, '%'))
               OR LOWER(p.excerpt) LIKE LOWER(CONCAT('%', :q, '%')))
        ORDER BY p.updatedAt DESC
    """)
    Page<BlogPost> searchAllByCategory(@Param("category") String category, @Param("q") String q, Pageable pageable);

    @Query("""
        SELECT p FROM BlogPost p
        WHERE p.status = :status
          AND (LOWER(p.title) LIKE LOWER(CONCAT('%', :q, '%'))
               OR LOWER(p.excerpt) LIKE LOWER(CONCAT('%', :q, '%')))
        ORDER BY p.updatedAt DESC
    """)
    Page<BlogPost> searchByStatus(@Param("status") String status, @Param("q") String q, Pageable pageable);

    @Query("""
        SELECT p FROM BlogPost p
        WHERE p.status = :status
          AND p.category = :category
          AND (LOWER(p.title) LIKE LOWER(CONCAT('%', :q, '%'))
               OR LOWER(p.excerpt) LIKE LOWER(CONCAT('%', :q, '%')))
        ORDER BY p.updatedAt DESC
    """)
    Page<BlogPost> searchByStatusAndCategory(
            @Param("status") String status,
            @Param("category") String category,
            @Param("q") String q,
            Pageable pageable
    );

    @Query("""
        SELECT p FROM BlogPost p
        WHERE p.status = :status
          AND (LOWER(p.title) LIKE LOWER(CONCAT('%', :q, '%'))
               OR LOWER(p.excerpt) LIKE LOWER(CONCAT('%', :q, '%')))
        ORDER BY p.publishedAt DESC
    """)
    Page<BlogPost> searchPublished(@Param("status") String status, @Param("q") String q, Pageable pageable);

    @Query("""
        SELECT p FROM BlogPost p
        WHERE p.status = :status
          AND p.category = :category
          AND (LOWER(p.title) LIKE LOWER(CONCAT('%', :q, '%'))
               OR LOWER(p.excerpt) LIKE LOWER(CONCAT('%', :q, '%')))
        ORDER BY p.publishedAt DESC
    """)
    Page<BlogPost> searchPublishedByCategory(
            @Param("status") String status,
            @Param("category") String category,
            @Param("q") String q,
            Pageable pageable
    );
}
