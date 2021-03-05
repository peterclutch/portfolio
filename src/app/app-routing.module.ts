import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectNavComponent } from './modules/project/project-nav/project-nav.component';
import { BioComponent } from './modules/bio/bio.component';
import { ProjectViewComponent } from './modules/project/project-view/project-view.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectNavComponent,
    data: { }
  },
  {
    path: 'projects/:id',
    component: ProjectViewComponent,
    data: {
      hasScrollIndicator: true
    }
  },
  {
    path: 'bio',
    component: BioComponent,
    data: { }
  },
  { path: '**', redirectTo: '/bio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
