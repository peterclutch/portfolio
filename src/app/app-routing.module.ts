import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectNavComponent } from './modules/project/project-nav/project-nav.component';
import { BioComponent } from './modules/bio/bio.component';
import { ProjectViewComponent } from './modules/project/project-view/project-view.component';

const routes: Routes = [
  { path: 'projects', component: ProjectNavComponent },
  { path: 'projects/:id', component: ProjectViewComponent },
  { path: 'bio', component: BioComponent },
  { path: '**', redirectTo: '/bio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
