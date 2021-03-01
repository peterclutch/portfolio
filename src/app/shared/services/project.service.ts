import { Injectable } from '@angular/core';
import { IProject } from '../models/project.model';
import { HeartTaleComponent } from '../../modules/project/project-content/heart-tale/heart-tale.component';
import { EasyScheduleComponent } from '../../modules/project/project-content/easyschedule/easy-schedule.component';
import { SquattyBuddyComponent } from '../../modules/project/project-content/squatty-buddy/squatty-buddy.component';
import { KatamariComponent } from '../../modules/project/project-content/katamari/katamari.component';
import { IceBreakerComponent } from '../../modules/project/project-content/ice-breaker/ice-breaker.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private static readonly projects: IProject[] = [
    {
      id: 'heart-tale',
      title: 'Using Data Physicalization to Foster Storytelling Through Group Heart Rate Data',
      subtitle: 'Master\'s Thesis',
      date: new Date(2018, 5),
      content: HeartTaleComponent,
      team: [{
        name: 'Mark Flarup-Jensen',
        linkedIn: 'https://www.linkedin.com/in/markflarup/'
      }, {
        name: 'Anders Syrach Lykkegaard',
        linkedIn: 'https://www.linkedin.com/in/anders-lykkegaard-916356148/'
      }],
      assets: [{
        title: 'Master\'s Thesis',
        ref: 'assets/documents/masters_thesis.pdf'
      }]
    },
    {
      id: 'easy-schedule',
      title: 'Simplifying Time for Learning Disabled Children',
      subtitle: 'Bachelor\'s Thesis',
      date: new Date(2015, 0),
      headerImg: 'png',
      content: EasyScheduleComponent,
      team: [{
        name: 'Michael Munk Kruse',
        linkedIn: 'https://www.linkedin.com/in/michael-kruse/'
      }, {
        name: 'Christian Skyum Larsen',
        linkedIn: 'https://www.linkedin.com/in/christian-skyum-larsen-26960991/'
      }, {
        name: 'Matias Ringgaard Thomsen',
        linkedIn: 'https://www.linkedin.com/in/matias-r-thomsen/'
      }],
      assets: [{
        title: 'Bachelor\'s Thesis',
        ref: 'assets/documents/bachelors_thesis.pdf'
      }, {
        title: 'Exhibition Poster',
        ref: 'assets/documents/bachelor_poster.pdf'
      }]
    },
    {
      id: 'squatty-buddy',
      title: 'SquattyBuddy: A Visual Guide for Squatting',
      subtitle: 'Embedded Software',
      date: new Date(2014, 9),
      content: SquattyBuddyComponent,
      team: [{
        name: 'Christian Skyum Larsen',
        linkedIn: 'https://www.linkedin.com/in/christian-skyum-larsen-26960991/'
      }, {
        name: 'Matias Ringgaard Thomsen',
        linkedIn: 'https://www.linkedin.com/in/matias-r-thomsen/'
      }],
      assets: []
    },
    {
      id: 'katamari',
      title: 'Katamari Damacy Video Game Controller',
      subtitle: 'Product Design',
      date: new Date(2014, 9),
      content: KatamariComponent,
      team: [{
        name: 'Michael Munk Kruse',
        linkedIn: 'https://www.linkedin.com/in/michael-kruse/'
      }, {
        name: 'Christian Skyum Larsen',
        linkedIn: 'https://www.linkedin.com/in/christian-skyum-larsen-26960991/'
      }, {
        name: 'Matias Ringgaard Thomsen',
        linkedIn: 'https://www.linkedin.com/in/matias-r-thomsen/'
      }],
      assets: []
    },
    {
      id: 'ice-breaker',
      title: 'Ice Breaker: Glass for Social Events',
      subtitle: 'Product Design',
      date: new Date(2013, 5),
      content: IceBreakerComponent,
      team: [{
        name: 'Michael Munk Kruse',
        linkedIn: 'https://www.linkedin.com/in/michael-kruse/'
      }, {
        name: 'Steffen Larsen',
        linkedIn: 'https://www.linkedin.com/in/steffenjullarsen/'
      }, {
        name: 'Keven Vu Dinh Nguyen',
        linkedIn: 'https://www.linkedin.com/in/keven-vu-dinh-nguyen-124a6282/'
      }],
      assets: [{
        title: 'Exhibition Poster',
        ref: 'assets/documents/ice-breaker_poster.pdf'
      }]
    }
  ];

  constructor() {}

  public getAllProjects(): IProject[] {
    return ProjectService.projects;
  }

  public getProject(id: string): IProject {
    return ProjectService.projects.find(p => p.id === id);
  }

}
