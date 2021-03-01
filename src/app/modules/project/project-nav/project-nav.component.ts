import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from '../../../shared/models/project.model';
import { ProjectService } from '../../../shared/services/project.service';

@Component({
  selector: 'ph-project-nav',
  templateUrl: './project-nav.component.html',
  styleUrls: ['./project-nav.component.scss']
})
export class ProjectNavComponent implements OnInit {
  projects: IProject[] = [];

  constructor(
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
  }

  toArticle(id: string) {
    this.router.navigate([`/projects/${id}`]);
  }

}
