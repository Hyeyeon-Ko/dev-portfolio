package com.devportfolio.backend.project.service;

import com.devportfolio.backend.blog.dto.common.IdResponse;
import com.devportfolio.backend.blog.exception.NotFoundException;
import com.devportfolio.backend.project.dto.*;
import com.devportfolio.backend.project.entity.Project;
import com.devportfolio.backend.project.repository.ProjectRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    // ── helpers ──────────────────────────────────────────

    private static List<String> splitCsv(String s) {
        if (s == null || s.isBlank()) return Collections.emptyList();
        return Arrays.stream(s.split(","))
                .map(String::trim)
                .filter(t -> !t.isEmpty())
                .collect(Collectors.toList());
    }

    private ProjectListItemResponse toListItem(Project p) {
        return ProjectListItemResponse.builder()
                .id(p.getId())
                .title(p.getTitle())
                .oneLine(p.getOneLine())
                .category(splitCsv(p.getCategory()))
                .tags(splitCsv(p.getTags()))
                .imageUrl(p.getImageUrl())
                .primaryLinkLabel(p.getPrimaryLinkLabel())
                .primaryLinkIcon(p.getPrimaryLinkIcon())
                .primaryLinkUrl(p.getPrimaryLinkUrl())
                .secondaryLinkLabel(p.getSecondaryLinkLabel())
                .secondaryLinkIcon(p.getSecondaryLinkIcon())
                .secondaryLinkUrl(p.getSecondaryLinkUrl())
                .hoverText(p.getHoverText())
                .accentColor(p.getAccentColor())
                .team(p.getTeam())
                .period(p.getPeriod())
                .role(p.getRole())
                .award(p.getAward())
                .highlights(splitCsv(p.getHighlights()))
                .sortOrder(p.getSortOrder())
                .build();
    }

    private ProjectDetailResponse toDetail(Project p) {
        return ProjectDetailResponse.builder()
                .id(p.getId())
                .title(p.getTitle())
                .oneLine(p.getOneLine())
                .category(splitCsv(p.getCategory()))
                .tags(splitCsv(p.getTags()))
                .imageUrl(p.getImageUrl())
                .primaryLinkLabel(p.getPrimaryLinkLabel())
                .primaryLinkIcon(p.getPrimaryLinkIcon())
                .primaryLinkUrl(p.getPrimaryLinkUrl())
                .secondaryLinkLabel(p.getSecondaryLinkLabel())
                .secondaryLinkIcon(p.getSecondaryLinkIcon())
                .secondaryLinkUrl(p.getSecondaryLinkUrl())
                .hoverText(p.getHoverText())
                .accentColor(p.getAccentColor())
                .team(p.getTeam())
                .period(p.getPeriod())
                .role(p.getRole())
                .award(p.getAward())
                .highlights(splitCsv(p.getHighlights()))
                .sortOrder(p.getSortOrder())
                .overview(p.getOverview())
                .problemJson(p.getProblemJson())
                .processJson(p.getProcessJson())
                .impactJson(p.getImpactJson())
                .build();
    }

    // ── public API ────────────────────────────────────────

    public List<ProjectListItemResponse> listProjects(String category) {
        boolean hasCategory = category != null && !category.isBlank() && !"ALL".equalsIgnoreCase(category);
        List<Project> projects = hasCategory
                ? projectRepository.findByCategoryContainingIgnoreCaseOrderBySortOrderDescCreatedAtDesc(category)
                : projectRepository.findAllByOrderBySortOrderDescCreatedAtDesc();
        return projects.stream().map(this::toListItem).collect(Collectors.toList());
    }

    public ProjectDetailResponse getProject(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("project not found: " + id));
        return toDetail(project);
    }

    @Transactional
    public IdResponse createProject(ProjectCreateRequest req) {
        Project project = Project.builder()
                .title(req.getTitle())
                .oneLine(req.getOneLine())
                .description(req.getDescription())
                .category(req.getCategory())
                .tags(req.getTags())
                .imageUrl(req.getImageUrl())
                .primaryLinkLabel(req.getPrimaryLinkLabel())
                .primaryLinkIcon(req.getPrimaryLinkIcon())
                .primaryLinkUrl(req.getPrimaryLinkUrl())
                .secondaryLinkLabel(req.getSecondaryLinkLabel())
                .secondaryLinkIcon(req.getSecondaryLinkIcon())
                .secondaryLinkUrl(req.getSecondaryLinkUrl())
                .hoverText(req.getHoverText())
                .accentColor(req.getAccentColor())
                .team(req.getTeam())
                .period(req.getPeriod())
                .role(req.getRole())
                .award(req.getAward())
                .highlights(req.getHighlights())
                .sortOrder(req.getSortOrder() != null ? req.getSortOrder() : 0)
                .overview(req.getOverview())
                .problemJson(req.getProblemJson())
                .processJson(req.getProcessJson())
                .impactJson(req.getImpactJson())
                .build();
        Project saved = projectRepository.save(project);
        return new IdResponse(saved.getId());
    }

    @Transactional
    public void updateProject(Long id, ProjectUpdateRequest req) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("project not found: " + id));

        if (req.getTitle() != null) project.setTitle(req.getTitle());
        if (req.getOneLine() != null) project.setOneLine(req.getOneLine());
        if (req.getDescription() != null) project.setDescription(req.getDescription());
        if (req.getCategory() != null) project.setCategory(req.getCategory());
        if (req.getTags() != null) project.setTags(req.getTags());
        if (req.getImageUrl() != null) project.setImageUrl(req.getImageUrl());
        if (req.getPrimaryLinkLabel() != null) project.setPrimaryLinkLabel(req.getPrimaryLinkLabel());
        if (req.getPrimaryLinkIcon() != null) project.setPrimaryLinkIcon(req.getPrimaryLinkIcon());
        if (req.getPrimaryLinkUrl() != null) project.setPrimaryLinkUrl(req.getPrimaryLinkUrl());
        if (req.getSecondaryLinkLabel() != null) project.setSecondaryLinkLabel(req.getSecondaryLinkLabel());
        if (req.getSecondaryLinkIcon() != null) project.setSecondaryLinkIcon(req.getSecondaryLinkIcon());
        if (req.getSecondaryLinkUrl() != null) project.setSecondaryLinkUrl(req.getSecondaryLinkUrl());
        if (req.getHoverText() != null) project.setHoverText(req.getHoverText());
        if (req.getAccentColor() != null) project.setAccentColor(req.getAccentColor());
        if (req.getTeam() != null) project.setTeam(req.getTeam());
        if (req.getPeriod() != null) project.setPeriod(req.getPeriod());
        if (req.getRole() != null) project.setRole(req.getRole());
        if (req.getAward() != null) project.setAward(req.getAward());
        if (req.getHighlights() != null) project.setHighlights(req.getHighlights());
        if (req.getSortOrder() != null) project.setSortOrder(req.getSortOrder());
        if (req.getOverview() != null) project.setOverview(req.getOverview());
        if (req.getProblemJson() != null) project.setProblemJson(req.getProblemJson());
        if (req.getProcessJson() != null) project.setProcessJson(req.getProcessJson());
        if (req.getImpactJson() != null) project.setImpactJson(req.getImpactJson());

        projectRepository.save(project);
    }

    @Transactional
    public void deleteProject(Long id) {
        if (!projectRepository.existsById(id)) {
            throw new NotFoundException("project not found: " + id);
        }
        projectRepository.deleteById(id);
    }
}
