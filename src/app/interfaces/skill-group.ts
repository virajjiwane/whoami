import { iSkill } from './skill';

export interface iSkillGroup {
    category: string;
    skills: iSkill[];
    icon: string;
    color: string;
}
