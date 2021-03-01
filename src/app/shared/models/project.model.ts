
export interface IProject {
  id: string;
  title: string;
  subtitle: string;
  date: Date;
  headerImg?: 'jpg' | 'png';
  content: any;
  team: ITeamMember[];
  assets: IAsset[];
}

export interface ITeamMember {
  name: string;
  linkedIn: string;
}

export interface IAsset {
  title: string;
  ref: string;
}
