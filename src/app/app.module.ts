import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './core/layout/main/main.component';
import { ProjectNavComponent } from './modules/project/project-nav/project-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { BioComponent } from './modules/bio/bio.component';
import { ProjectViewComponent } from './modules/project/project-view/project-view.component';
import { ArticleDirective } from './shared/directives/article.directive';
import { HeartTaleComponent } from './modules/project/project-content/heart-tale/heart-tale.component';
import { EasyScheduleComponent } from './modules/project/project-content/easyschedule/easy-schedule.component';
import { SquattyBuddyComponent } from './modules/project/project-content/squatty-buddy/squatty-buddy.component';
import { FormatDatePipe } from './shared/pipes/format-date.pipe';
import { KatamariComponent } from './modules/project/project-content/katamari/katamari.component';
import { IceBreakerComponent } from './modules/project/project-content/ice-breaker/ice-breaker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MainComponent,
    ProjectNavComponent,
    BioComponent,
    ProjectViewComponent,
    ArticleDirective,
    HeartTaleComponent,
    EasyScheduleComponent,
    SquattyBuddyComponent,
    FormatDatePipe,
    KatamariComponent,
    IceBreakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
