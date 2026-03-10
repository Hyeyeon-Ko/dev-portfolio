package com.devportfolio.backend.project.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjectCreateRequest {
    @NotBlank
    private String title;
    private String oneLine;
    private String description;
    private String category;   // comma-separated
    private String tags;       // comma-separated
    private String imageUrl;
    private String primaryLinkLabel;
    private String primaryLinkIcon;
    private String primaryLinkUrl;
    private String secondaryLinkLabel;
    private String secondaryLinkIcon;
    private String secondaryLinkUrl;
    private String hoverText;
    private String accentColor;
    private String team;
    private String period;
    private String role;
    private String award;
    private String highlights; // comma-separated
    private Integer sortOrder;
    private String overview;
    private String problemJson;
    private String processJson;
    private String impactJson;
}
