import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { IProject } from '../../../shared/models/account.model';
import { ProjectService } from '../../../shared/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { ArticleDirective } from '../../../shared/directives/article.directive';

@Component({
  selector: 'ph-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit, AfterViewInit {
  project: IProject;
  @ViewChild(ArticleDirective, {static: true}) articleHost: ArticleDirective;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.getProject(id);
  }

  ngAfterViewInit(): void {
    this.loadArticle();
  }

  loadArticle() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.project.content);
    this.articleHost.viewContainerRef.createComponent<any>(componentFactory);
  }

}
