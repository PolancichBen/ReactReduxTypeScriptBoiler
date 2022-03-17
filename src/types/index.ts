export interface IconProps {
  size?: number;
  color?: string;
}

export type SkillShape = {
  name: string;
  url: string;
  type: string | Array<string>;
};

export type ProjectTeamMember = {
  name: string;
  role: string;
  url?: string;
};

export interface ProjectShape {
  name: string;
  description: string;
  skills: SkillShape[];
  image: string;
  url: string;
  team?: ProjectTeamMember[];
  deployed: boolean;
  deployedUrl?: string;
  projectType: 'Work' | 'Personal';
}
