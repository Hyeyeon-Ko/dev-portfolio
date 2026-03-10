package com.devportfolio.backend.project.controller;

import com.devportfolio.backend.blog.dto.common.ApiResponse;
import com.devportfolio.backend.project.dto.ProjectDetailResponse;
import com.devportfolio.backend.project.dto.ProjectListItemResponse;
import com.devportfolio.backend.project.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    public ApiResponse<List<ProjectListItemResponse>> list(
            @RequestParam(required = false) String category
    ) {
        return ApiResponse.ok(projectService.listProjects(category));
    }

    @GetMapping("/{id}")
    public ApiResponse<ProjectDetailResponse> detail(@PathVariable Long id) {
        return ApiResponse.ok(projectService.getProject(id));
    }
}
