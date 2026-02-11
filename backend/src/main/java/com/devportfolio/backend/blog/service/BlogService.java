package com.devportfolio.backend.blog.service;

import com.devportfolio.backend.blog.dto.comment.CommentCreateRequest;
import com.devportfolio.backend.blog.dto.comment.CommentItemResponse;
import com.devportfolio.backend.blog.dto.common.IdResponse;
import com.devportfolio.backend.blog.dto.common.PageResponse;
import com.devportfolio.backend.blog.dto.like.LikeResponse;
import com.devportfolio.backend.blog.dto.post.*;
import com.devportfolio.backend.blog.entity.BlogPost;
import com.devportfolio.backend.blog.entity.PostComment;
import com.devportfolio.backend.blog.entity.PostLike;
import com.devportfolio.backend.blog.repository.BlogPostRepository;
import com.devportfolio.backend.blog.repository.PostCommentRepository;
import com.devportfolio.backend.blog.repository.PostLikeRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;

import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BlogService {

    private final BlogPostRepository postRepository;
    private final PostCommentRepository commentRepository;
    private final PostLikeRepository likeRepository;

    public PageResponse<PostListItemResponse> listPublished(String category, String q, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "publishedAt"));

        String status = "PUBLISHED";
        String query = (q == null) ? "" : q.trim();

        Page<BlogPost> p;

        boolean hasCategory = category != null && !category.isBlank() && !"All".equalsIgnoreCase(category);
        boolean hasQuery = !query.isBlank();

        if (!hasCategory && !hasQuery) {
            p = postRepository.findByStatusOrderByPublishedAtDesc(status, pageable);
        } else if (hasCategory && !hasQuery) {
            p = postRepository.findByStatusAndCategoryOrderByPublishedAtDesc(status, category, pageable);
        } else if (!hasCategory) {
            p = postRepository.findByStatusAndTitleContainingIgnoreCaseOrStatusAndExcerptContainingIgnoreCase(
                    status, query, status, query, pageable
            );
        } else {
            p = postRepository.findByStatusAndCategoryAndTitleContainingIgnoreCaseOrStatusAndCategoryAndExcerptContainingIgnoreCase(
                    status, category, query,
                    status, category, query,
                    pageable
            );
        }

        Page<PostListItemResponse> mapped = p.map(this::toListItem);
        return PageResponse.from(mapped);
    }

    public PostDetailResponse getPost(Long id) {
        BlogPost post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("post not found: " + id));
        return toDetail(post);
    }

    @Transactional
    public IdResponse createPost(PostRequest req) {
        BlogPost post = BlogPost.builder()
                .title(req.getTitle())
                .contentMd(req.getContentMd())
                .excerpt(req.getExcerpt())
                .category(req.getCategory())
                .coverImageUrl(req.getCoverImageUrl())
                .readTimeMin(req.getReadTimeMin())
                .status(req.getStatus() == null ? "DRAFT" : req.getStatus())
                .publishedAt(null)
                .likeCount(0)
                .commentCount(0)
                .createdAt(OffsetDateTime.now())
                .updatedAt(OffsetDateTime.now())
                .build();

        if ("PUBLISHED".equalsIgnoreCase(post.getStatus())) {
            post.setPublishedAt(OffsetDateTime.now());
        }

        BlogPost saved = postRepository.save(post);
        return new IdResponse(saved.getId());
    }

    @Transactional
    public void updatePost(Long id, PostRequest req) {
        BlogPost post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("post not found: " + id));

        if (req.getTitle() != null) post.setTitle(req.getTitle());
        if (req.getContentMd() != null) post.setContentMd(req.getContentMd());
        if (req.getExcerpt() != null) post.setExcerpt(req.getExcerpt());
        if (req.getCategory() != null) post.setCategory(req.getCategory());
        if (req.getCoverImageUrl() != null) post.setCoverImageUrl(req.getCoverImageUrl());
        if (req.getReadTimeMin() != null) post.setReadTimeMin(req.getReadTimeMin());

        if (req.getStatus() != null) {
            String before = post.getStatus();
            post.setStatus(req.getStatus());

            if (!"PUBLISHED".equalsIgnoreCase(before) && "PUBLISHED".equalsIgnoreCase(req.getStatus())) {
                post.setPublishedAt(OffsetDateTime.now());
            }
        }

        postRepository.save(post);
    }

    @Transactional
    public void deletePost(Long id) {
        // 단순 삭제(연관 데이터도 삭제할지 정책 필요)
        // 지금은 post 먼저 삭제하면 FK 있으면 실패할 수 있음.
        // 안전하게: comments/likes 먼저 삭제 후 post 삭제
        commentRepository.deleteAll(commentRepository.findByPostIdOrderByIdAsc(id));
        likeRepository.deleteAll(likeRepository.findAll().stream().filter(l -> l.getPostId().equals(id)).toList());
        postRepository.deleteById(id);
    }

    public List<CommentItemResponse> listComments(Long postId) {
        return commentRepository.findByPostIdOrderByIdAsc(postId)
                .stream()
                .map(this::toCommentItem)
                .toList();
    }

    @Transactional
    public IdResponse addComment(Long postId, CommentCreateRequest req) {
        // 게시글 존재 체크
        BlogPost post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("post not found: " + postId));

        PostComment comment = PostComment.builder()
                .postId(postId)
                .authorName(req.getAuthorName())
                .content(req.getContent())
                .createdAt(OffsetDateTime.now())
                .build();

        PostComment saved = commentRepository.save(comment);

        // count 컬럼 유지하는 설계라면 여기서 증가
        post.setCommentCount(post.getCommentCount() + 1);
        postRepository.save(post);

        return new IdResponse(saved.getId());
    }

    @Transactional
    public LikeResponse like(Long postId, String visitorKey) {
        BlogPost post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("post not found: " + postId));

        if (visitorKey == null || visitorKey.isBlank()) {
            throw new IllegalArgumentException("visitorKey is required");
        }

        boolean already = likeRepository.existsByPostIdAndVisitorKey(postId, visitorKey);
        if (already) {
            return new LikeResponse(post.getLikeCount(), false);
        }

        PostLike like = PostLike.builder()
                .postId(postId)
                .visitorKey(visitorKey)
                .createdAt(OffsetDateTime.now())
                .build();

        likeRepository.save(like);

        post.setLikeCount(post.getLikeCount() + 1);
        postRepository.save(post);

        return new LikeResponse(post.getLikeCount(), true);
    }

    private PostListItemResponse toListItem(BlogPost p) {
        return PostListItemResponse.builder()
                .id(p.getId())
                .title(p.getTitle())
                .excerpt(p.getExcerpt())
                .category(p.getCategory())
                .publishedAt(p.getPublishedAt())
                .coverImageUrl(p.getCoverImageUrl())
                .readTimeMin(p.getReadTimeMin())
                .likeCount(p.getLikeCount())
                .commentCount(p.getCommentCount())
                .build();
    }

    private PostDetailResponse toDetail(BlogPost p) {
        return PostDetailResponse.builder()
                .id(p.getId())
                .title(p.getTitle())
                .contentMd(p.getContentMd())
                .excerpt(p.getExcerpt())
                .category(p.getCategory())
                .status(p.getStatus())
                .publishedAt(p.getPublishedAt())
                .coverImageUrl(p.getCoverImageUrl())
                .readTimeMin(p.getReadTimeMin())
                .likeCount(p.getLikeCount())
                .commentCount(p.getCommentCount())
                .createdAt(p.getCreatedAt())
                .updatedAt(p.getUpdatedAt())
                .build();
    }

    private CommentItemResponse toCommentItem(PostComment c) {
        return CommentItemResponse.builder()
                .id(c.getId())
                .authorName(c.getAuthorName())
                .content(c.getContent())
                .createdAt(c.getCreatedAt())
                .build();
    }
}
