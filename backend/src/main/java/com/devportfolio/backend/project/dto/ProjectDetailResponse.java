package com.devportfolio.backend.project.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class ProjectDetailResponse {
    private Long id;
    private String title;
    private String oneLine;
    private List<String> category;
    private List<String> tags;
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
    private List<String> highlights;
    private Integer sortOrder;
    // Case study fields
    private String overview;
    private String problemJson;
    private String processJson;
    private String impactJson;
}
