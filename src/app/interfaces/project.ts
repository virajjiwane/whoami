import { iProjectPoints } from './project-points';

export interface iProject {
    name: string;
    description: string;
    architecture: string; // SVG File URL
    projectUrl?: string;
    frontEndPoints: iProjectPoints;
    backEndPoints: iProjectPoints;
    achievements: iProjectPoints;
    isConfidential?: boolean;
}
