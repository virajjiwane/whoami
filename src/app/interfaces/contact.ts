export interface iContact {
    email: string;
    phone: string;
    location: string;
    resumeUrl: string;
    links: {
        label: string;
        url: string;
        iconSVG: string;
    }[];
}
