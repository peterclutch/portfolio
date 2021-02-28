import { Component, OnInit } from '@angular/core';
import { IProject } from '../../../shared/models/account.model';

@Component({
  selector: 'ph-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {
  project: IProject = {
    id: 0,
    title: 'Using Data Physicalization to Foster Storytelling Through Group Heart Rate Data',
    subtitle: 'Master\'s Thesis',
    thumbnailRef: '',
    headerRef: '',
    content: '',
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

  };

  constructor() { }

  ngOnInit(): void {
  }

}
