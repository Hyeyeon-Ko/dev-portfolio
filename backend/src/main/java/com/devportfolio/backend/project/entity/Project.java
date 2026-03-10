package com.devportfolio.backend.project.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.OffsetDateTime;

@Entity
@Table(name = "projects")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 200, nullable = false)
    private String title;

    @Column(name = "one_line", length = 300)
    private String oneLine;

    @Column(columnDefinition = "text")
    private String description;

    @Column(length = 100)
    private String category; // comma-separated: "FULLSTACK,WEB"

    @Column(length = 500)
    private String tags; // comma-separated

    @Column(name = "image_url", columnDefinition = "text")
    private String imageUrl;

    @Column(name = "primary_link_label", length = 50)
    private String primaryLinkLabel;

    @Column(name = "primary_link_icon", length = 50)
    private String primaryLinkIcon;

    @Column(name = "primary_link_url", columnDefinition = "text")
    private String primaryLinkUrl;

    @Column(name = "secondary_link_label", length = 50)
    private String secondaryLinkLabel;

    @Column(name = "secondary_link_icon", length = 50)
    private String secondaryLinkIcon;

    @Column(name = "secondary_link_url", columnDefinition = "text")
    private String secondaryLinkUrl;

    @Column(name = "hover_text", length = 500)
    private String hoverText;

    @Column(name = "accent_color", length = 20)
    private String accentColor;

    @Column(length = 100)
    private String team;

    @Column(length = 100)
    private String period;

    @Column(length = 500)
    private String role;

    @Column(length = 200)
    private String award;

    @Column(length = 1000)
    private String highlights; // comma-separated

    @Column(name = "sort_order")
    private Integer sortOrder; // higher = first

    // Case study fields
    @Column(columnDefinition = "text")
    private String overview;

    @Column(name = "problem_json", columnDefinition = "text")
    private String problemJson; // JSON array

    @Column(name = "process_json", columnDefinition = "text")
    private String processJson; // JSON array

    @Column(name = "impact_json", columnDefinition = "text")
    private String impactJson; // JSON array

    @Column(name = "created_at")
    private OffsetDateTime createdAt;

    @Column(name = "updated_at")
    private OffsetDateTime updatedAt;

    @PrePersist
    void onCreate() {
        OffsetDateTime now = OffsetDateTime.now();
        if (createdAt == null) createdAt = now;
        if (updatedAt == null) updatedAt = now;
        if (sortOrder == null) sortOrder = 0;
    }

    @PreUpdate
    void onUpdate() {
        updatedAt = OffsetDateTime.now();
    }
}
