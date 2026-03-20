package com.devportfolio.backend.blog.service;

import com.devportfolio.backend.blog.dto.post.PostDetailResponse;
import com.devportfolio.backend.blog.entity.BlogPost;
import com.devportfolio.backend.blog.exception.NotFoundException;
import com.devportfolio.backend.blog.repository.BlogPostRepository;
import com.devportfolio.backend.blog.repository.PostCommentRepository;
import com.devportfolio.backend.blog.repository.PostLikeRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class BlogServiceTest {

    @Mock
    private BlogPostRepository postRepository;

    @Mock
    private PostCommentRepository commentRepository;

    @Mock
    private PostLikeRepository likeRepository;

    @InjectMocks
    private BlogService blogService;

    private BlogPost publishedPost;

    @BeforeEach
    void setUp() {
        publishedPost = BlogPost.builder()
                .id(1L)
                .title("테스트 포스트")
                .contentMd("# 내용")
                .excerpt("요약")
                .category("TIL")
                .status("PUBLISHED")
                .publishedAt(OffsetDateTime.now())
                .likeCount(0)
                .commentCount(0)
                .createdAt(OffsetDateTime.now())
                .updatedAt(OffsetDateTime.now())
                .build();
    }

    @Test
    void getPublishedPost_returnsPostWithRelatedPosts() {
        when(postRepository.findById(1L)).thenReturn(Optional.of(publishedPost));
        when(postRepository.findTop4ByStatusAndCategoryAndIdNotOrderByPublishedAtDesc(
                eq("PUBLISHED"), eq("TIL"), eq(1L)))
                .thenReturn(List.of());

        PostDetailResponse result = blogService.getPublishedPost(1L);

        assertThat(result.getId()).isEqualTo(1L);
        assertThat(result.getTitle()).isEqualTo("테스트 포스트");
        assertThat(result.getRelatedPosts()).isEmpty();
    }

    @Test
    void getPublishedPost_throwsNotFound_whenPostDoesNotExist() {
        when(postRepository.findById(99L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> blogService.getPublishedPost(99L))
                .isInstanceOf(NotFoundException.class);
    }

    @Test
    void getPublishedPost_throwsNotFound_whenPostIsDraft() {
        BlogPost draft = BlogPost.builder()
                .id(2L)
                .title("초안")
                .contentMd("")
                .excerpt("")
                .category("TIL")
                .status("DRAFT")
                .likeCount(0)
                .commentCount(0)
                .createdAt(OffsetDateTime.now())
                .updatedAt(OffsetDateTime.now())
                .build();

        when(postRepository.findById(2L)).thenReturn(Optional.of(draft));

        assertThatThrownBy(() -> blogService.getPublishedPost(2L))
                .isInstanceOf(NotFoundException.class);
    }
}
