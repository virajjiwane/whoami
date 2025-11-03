export interface Hero {
    name: string;
    title: string;
    backgroundImageUrl: string;
    skills: string[];
    links: {
        label: string;
        url: string;
        icon: string;
    }[];
}
