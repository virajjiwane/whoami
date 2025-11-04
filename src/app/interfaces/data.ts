import { iAboutMe } from './about-me';
import { iExperience } from './experience';
import { iSkillGroup } from './skill-group';
import { iProject } from './project';
import { iContact } from './contact';
import { iHero } from './hero';

export interface iData {
    aboutMe: iAboutMe;
    experience: { [key: string]: iExperience };
    experienceOrder: string[];
    skillGroups: iSkillGroup[];
    projects: { [key: string]: iProject };
    displayedProjects: string[];
    contact: iContact;
    hero: iHero;
}
