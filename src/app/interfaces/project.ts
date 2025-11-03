import { ProjectPoints } from "./project-points";

export interface Project {
    name: string;
    description: string;
    architecture: string; // SVG File URL
    projectUrl: string;
    frontEndPoints: ProjectPoints;
    backEndPoints: ProjectPoints;
    achievements: ProjectPoints;
}
