import { iData } from '../interfaces/data';

export const DATA: iData = {
    hero: {
        name: 'Viraj Jiwane',
        title: 'Senior Software Developer | Systems, APIs, Data pipelines',
        description:
            '5+ years. 14 projects. Scalable systems for 500k+ users. Proven delivery and measurable impact.',
        backgroundImageUrl: '/assets/hero-bg.jpg',
        skills: [
            'Django',
            'Docker',
            'PostgreSQL',
            'System Design',
            'AWS',
            'RESTful APIs',
            'CI/CD',
            'Angular',
            'NLP',
        ],
        links: [
            { label: 'GitHub', url: 'https://github.com/virajjiwane', icon: '🐙' },
            {
                label: 'LinkedIn',
                url: 'https://www.linkedin.com/in/viraj-jiwane-33aa2b126/',
                icon: '💼',
            },
            { label: 'Twitter', url: 'https://x.com/viraj_jiwane/', icon: '🐦' },
            { label: 'Blog', url: 'https://medium.com/@vjiwane27/', icon: '✍️' },
        ],
    },

    aboutMe: {
        bio: 'Full-stack developer specializing in Python, Django, Angular, and scalable microservices.',
        profileImageUrl: '/assets/profile.jpg',
        description:
            "I'm Viraj Jiwane. I design and implement backend systems, microservices, and data pipelines. I've worked across startups and enterprise clients to reduce latency, automate processes, and improve reliability.",
        keyFacts: [
            '5+ years experience, 95% on-time delivery',
            'Patent holder: SILI Tool (Patent No. 522541, 2024)',
            '14 projects',
            'SPOT Award - LenDenClub, 2022',
            'Winner - Smart India Hackathon (Hardware), 2019',
        ],
        coreTech: [
            'Python',
            'Django',
            'Spring Boot',
            'Docker',
            'PostgreSQL',
            'Angular',
            'AWS',
            'PHP',
            'NLP',
            'Flutter',
        ],
        hobbies: [
            'Game Development',
            'Reading Books',
            'Playing Piano',
            'Weightlifting',
            'Digital Painting',
            'Bodybuilding',
        ],
    },

    experience: {
        euracle_fulltime: {
            company: 'Euracle Corp. (EDA Inc. client)',
            role: 'Sr. Software Developer',
            startDate: new Date('2023-06'),
            endDate: 'Present',
            responsibilities: [
                'Developed scalable organizational culture analytics pipelines using Python and Sentence Transformers.',
                'Boosted processing performance by 85% with multiprocessing and query optimization.',
                'Built GDPR-compliant dashboards and portals used by 5K+ employees across 6 organizations.',
                'Collaborated closely with a compact agile team for product architecture and delivery.',
            ],
            technologies: [
                'Python',
                'Django',
                'Pandas',
                'Sentence Transformers',
                'PHP',
                'Docker',
                'Azure',
            ],
            location: 'Remote',
            companyLogoUrl: '/assets/logos/euracle.png',
            description:
                'Built a scalable analytics pipeline and GDPR-compliant dashboards used across enterprise clients.',
            websiteUrl: 'https://euracle.com/',
        },
        lendenclub: {
            company: 'LenDenClub',
            role: 'Software Developer',
            startDate: new Date('2021-07'),
            endDate: new Date('2023-04'),
            responsibilities: [
                'Led development of a microservices-based Lending, Funding, and Disbursal platform using Django REST.',
                'Reduced loan disbursal time by 98%.',
                'Automated internal tooling reducing customer support tickets by 57%.',
                'Mentored six developers and implemented CI/CD pipelines for deployment.',
            ],
            technologies: ['Django', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'AWS'],
            location: 'Remote',
            companyLogoUrl: 'assets/logos/lendenclub.png',
            description: 'Core backend engineer for lending & funding automation platform.',
            websiteUrl: 'https://www.lendenclub.com/',
        },
        amdocs: {
            company: 'Amdocs',
            role: 'Associate Software Engineer',
            startDate: new Date('2020-09'),
            endDate: new Date('2021-07'),
            responsibilities: [
                'Developed network-level orchestration microservices using Spring Boot and Kubernetes.',
                'Upgraded legacy components improving maintainability.',
                'Introduced Selenium-based automation reducing manual QA effort.',
            ],
            technologies: ['Spring Boot', 'Kubernetes', 'PostgreSQL', 'Selenium'],
            location: 'Remote',
            companyLogoUrl: 'assets/logos/amdocs.png',
            description: 'Contributed to modernization of large-scale orchestration microservices.',
            websiteUrl: 'https://www.amdocs.com/',
        },
        euracle_parttime: {
            company: 'Euracle Corp.',
            role: 'Full-Stack Developer (Part-Time)',
            startDate: '2019-09',
            endDate: '2020-07',
            responsibilities: [
                'Delivered full-stack web and mobile applications across 5 client projects.',
                'Worked on end-to-end development using Django, Spring Boot, Angular, Flutter, and Ionic.',
                'Managed PostgreSQL databases, integration testing, and ensured on-time client delivery.',
                'Collaborated with design and QA teams for smooth deployment pipelines.',
            ],
            technologies: ['Django', 'Spring Boot', 'Angular', 'Flutter', 'Ionic', 'PostgreSQL'],
            location: 'Remote',
            companyLogoUrl: '/assets/logos/euracle.png',
            description:
                'Handled full-stack development for multiple client web and mobile projects, maintaining delivery quality and performance.',
            websiteUrl: 'https://euracle.example.com',
        },
    },

    experienceOrder: ['euracle_fulltime', 'lendenclub', 'amdocs', 'euracle_parttime'],

    skillGroups: [
        {
            category: 'Backend & APIs',
            icon: '⚡',
            color: 'green',
            skills: [
                { name: 'Python & Django', level: '92' },
                { name: 'Spring Boot (Java)', level: '85' },
                { name: 'RESTful APIs', level: '95' },
                { name: 'Microservices & System Design', level: '90' },
            ],
        },
        {
            category: 'DevOps & Cloud',
            icon: '🚀',
            color: 'purple',
            skills: [
                { name: 'Web & Query Performance', level: '92' },
                { name: 'CI/CD & Automation', level: '90' },
                { name: 'Docker & Docker Compose', level: '86' },
                { name: 'AWS & Azure Cloud Infra', level: '84' },
            ],
        },
        {
            category: 'Frontend & UX',
            icon: '🎨',
            color: 'blue',
            skills: [
                { name: 'Angular & Modern JS', level: '81' },
                { name: 'Flutter (mobile & web)', level: '70' },
                { name: 'TypeScript & CSS', level: '86' },
                { name: 'Accessibility & Performance', level: '65' },
            ],
        },
        {
            category: 'Data & ML',
            icon: '📊',
            color: 'yellow',
            skills: [
                { name: 'Data Pipelines & ETL', level: '90' },
                { name: 'ML Modeling &amp; Deployment', level: '82' },
                { name: 'Sentence Transformers / NLP', level: '78' },
                { name: 'Analytics & Dashboards', level: '88' },
            ],
        },
        {
            category: 'Tools & Databases',
            icon: '🛠️',
            color: 'red',
            skills: [
                { name: 'PostgreSQL & MongoDB', level: '92' },
                { name: 'Redis & Caching', level: '86' },
                { name: 'Message Queues (Kafka)', level: '84' },
                { name: 'Testing &amp; Automation', level: '88' },
            ],
        },
    ],

    projects: {
        cultureAnalytics: {
            name: 'Org-Culture Analytics Pipeline | Euracle',
            description:
                'Scalable analytics pipeline for org-culture insights. Processed large corp datasets and produced GDPR-safe dashboards used by 5k+ C-Suite executives across multiple organizations.',
            architecture: '/assets/architecture/arch-culture.svg',
            projectUrl: 'https://virajjiwane.onrender.com/case-studies/culture-analytics',
            frontEndPoints: {
                title: 'Frontend & UX',
                points: [
                    'PHP + Vanilla HTML CSS JS dashboards',
                    'Interactive filters, PDF and CSV exports',
                    'GDPR consent flows and masking',
                    'Role-based access controls',
                ],
                titleColor: 'blue',
            },
            backEndPoints: {
                title: 'Backend & ML',
                points: [
                    'Python ETL pipelines',
                    'Sentence-transformers for semantic analysis',
                    'Multiprocessing and async workers',
                    'MySQL + Azure Suite',
                ],
                titleColor: 'purple',
            },
            achievements: {
                title: 'Key Achievements',
                points: [
                    '85% improvement in pipeline throughput',
                    'GDPR-compliant reporting across EU clients',
                    'Reduced manual data-prep by automations',
                ],
                titleColor: 'teal',
            },
        },
        lendingPlatform: {
            name: 'Microservices Lending Platform | LenDenClub',
            description:
                'Led microservices redesign for loan disbursal and underwriting. Focus on reliability, idempotency and automation for high-volume disbursal workflows.',
            architecture: '/assets/architecture/arch-lending.svg',
            projectUrl: 'https://virajjiwane.onrender.com/case-studies/lending-platform',
            frontEndPoints: {
                title: 'Frontend',
                points: [
                    'Admin portals (Angular)',
                    'Loan origination flows',
                    'Notifications & audit trails',
                ],
                titleColor: 'blue',
            },
            backEndPoints: {
                title: 'Backend',
                points: [
                    'Django microservices',
                    'Celery workers and RabbitMQ',
                    'Postgres, Redis, and background reconciliation',
                ],
                titleColor: 'purple',
            },
            achievements: {
                title: 'Key Achievements',
                points: [
                    'Reduced disbursal time by 98%',
                    'Automated flows reduced support tickets by 57%',
                    'Mentored 6 engineers during rollout',
                ],
                titleColor: 'teal',
            },
        },
        siliTool: {
            name: 'SILI Tool — Smart Inline Inspection Tool (Patent)',
            description:
                'ML + IoT system for wax-deposition prediction on pipelines. Won hackathon and granted patent in 2024. Includes sensor integration and predictive dashboard.',
            architecture: '/assets/architecture/arch-sili.svg',
            projectUrl: 'https://github.com/virajjiwane/sili-tool',
            frontEndPoints: {
                title: 'Hardware & Edge',
                points: ['Arduino sensor network', 'Edge preprocessing', 'Low-power telemetry'],
                titleColor: 'blue',
            },
            backEndPoints: {
                title: 'Cloud & Models',
                points: [
                    'Keras models for prediction',
                    'Django dashboards for monitoring',
                    'Alerts and scheduled inspections',
                ],
                titleColor: 'purple',
            },
            achievements: {
                title: 'Key Achievements',
                points: [
                    'Patent granted (2024)',
                    'Hackathon winner and IEEE recognition',
                    'Significant predicted OPEX reduction for pilot customers',
                ],
                titleColor: 'teal',
            },
        },
    },

    displayedProjects: ['cultureAnalytics', 'lendingPlatform', 'siliTool'],

    contact: {
        email: 'vjiwane27@gmail.com',
        phone: '+91 79729 20267',
        location: 'Maharashtra, India',
        resumeUrl: 'assets/resume.pdf',
        links: [
            {
                label: 'GitHub',
                url: 'https://github.com/virajjiwane/',
                iconSVG: `
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
                `,
            },
            {
                label: 'LinkedIn',
                url: 'https://www.linkedin.com/in/viraj-jiwane-33aa2b126/',
                iconSVG: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>`,
            },
            {
                label: 'X (Twitter)',
                url: 'https://x.com/viraj_jiwane/',
                iconSVG: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>`,
            },
            {
                label: 'Email',
                url: 'mailto:vjiwane27@gmail.com',
                iconSVG: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>`,
            },
        ],
    },
};

export default DATA;
