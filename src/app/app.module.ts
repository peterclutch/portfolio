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
import { MenuMobileComponent } from './core/layout/menu-mobile/menu-mobile.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MenuOverlayService } from './shared/services/menu-overlay.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { InstagramOutline, GithubOutline, LinkedinOutline, YoutubeOutline, CameraFill, VideoCameraFill } from '@ant-design/icons-angular/icons';
import { DrawAndBuildComponent } from './modules/project/project-content/draw-and-build/draw-and-build.component';

const icons: IconDefinition[] = [
  InstagramOutline,
  GithubOutline,
  LinkedinOutline,
  YoutubeOutline,
  CameraFill,
  VideoCameraFill
];

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
    IceBreakerComponent,
    MenuMobileComponent,
    DrawAndBuildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [
    MenuOverlayService
  ],
  bootstrap: [MainComponent],
  entryComponents: [
    MenuMobileComponent
  ]
})
export class AppModule { }
