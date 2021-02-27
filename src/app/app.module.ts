import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './core/layout/main/main.component';
import { ProjectNavComponent } from './modules/project/project-nav/project-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { BioComponent } from './modules/bio/bio.component';
import { ProjectViewComponent } from './modules/project/project-view/project-view.component';

@NgModule({
  declarations: [
    MainComponent,
    ProjectNavComponent,
    BioComponent,
    ProjectViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
