export interface iExperience {
    company: string;
    role: string;
    startDate: Date | string;
    endDate: Date | string | 'Present';
    responsibilities: string[];
    technologies: string[];
    location: string;
    companyLogoUrl: string;
    description: string;
    websiteUrl: string;
}
