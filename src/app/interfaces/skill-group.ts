import { Skill } from "./skill";

export interface SkillGroup {
    category: string;
    skills: Skill[];
    iconUrl: string;
    colorHex: string;
}
