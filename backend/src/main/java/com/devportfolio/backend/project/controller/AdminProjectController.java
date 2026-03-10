package com.devportfolio.backend.project.controller;

import com.devportfolio.backend.blog.dto.common.ApiResponse;
import com.devportfolio.backend.blog.dto.common.IdResponse;
import com.devportfolio.backend.project.dto.*;
import com.devportfolio.backend.project.service.ProjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/projects")
public class AdminProjectController {

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

    @PostMapping
    public ApiResponse<IdResponse> create(@Valid @RequestBody ProjectCreateRequest req) {
        return ApiResponse.ok(projectService.createProject(req));
    }

    @PutMapping("/{id}")
    public ApiResponse<Void> update(@PathVariable Long id, @RequestBody ProjectUpdateRequest req) {
        projectService.updateProject(id, req);
        return ApiResponse.ok(null);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        projectService.deleteProject(id);
        return ApiResponse.ok(null);
    }
}
