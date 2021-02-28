export interface IProject {
  id: number;
  title: string;
  subtitle: string;
  thumbnailRef: string;
  headerRef: string;
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
