export interface iHero {
    name: string;
    title: string;
    description: string;
    backgroundImageUrl: string;
    skills: string[];
    links: {
        label: string;
        url: string;
        icon: string;
    }[];
}
