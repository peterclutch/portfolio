import { Injectable } from '@angular/core';
import { IProject } from '../models/account.model';
import { HeartTaleComponent } from '../../modules/project/project-content/heart-tale/heart-tale.component';
import { EasyscheduleComponent } from '../../modules/project/project-content/easyschedule/easyschedule.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private static readonly projects: IProject[] = [
    {
      id: 'heart-tale',
      title: 'Using Data Physicalization to Foster Storytelling Through Group Heart Rate Data',
      subtitle: 'Master\'s Thesis',
      thumbnailRef: 'assets/images/thumbnails/hearttale.jpg', // TODO make smarter
      headerRef: 'assets/images/heart-tale/hearttale.jpg', // TODO likewise
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
        ref: 'assets/doc/MastersThesis.pdf'
      }]
    },
    {
      id: 'easyschedule',
      title: 'Simplifying Time for Learning Disabled Children',
      subtitle: 'Bachelor\'s Thesis',
      thumbnailRef: 'assets/images/thumbnails/bachelor.jpg',
      headerRef: 'assets/images/easyschedule/bachelorproject.png',
      content: EasyscheduleComponent,
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
        ref: 'assets/doc/LaserExplosion_bachelor_thesis.pdf'
      }, {
        title: 'Exhibition Poster',
        ref: 'assets/doc/LaserExplosion_poster.pdf'
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
