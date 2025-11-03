import { AboutMe } from "./about-me";
import { Experience } from "./experience";
import { SkillGroup } from "./skill-group";
import { Project } from "./project";
import { Contact } from "./contact";
import { Hero } from "./hero";

export interface Data {
    aboutMe: AboutMe;
    experience: Experience[];
    skillGroups: SkillGroup[];
    projects: Project[];
    contact: Contact;
    hero: Hero;
}
