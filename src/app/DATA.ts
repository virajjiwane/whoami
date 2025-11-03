// data.const.ts
import type { Data } from "./interfaces/data";

export const DATA: Data = {
  aboutMe: {
    bio: "Sr. Software Developer — full-stack engineer focusing on scalable data pipelines, NLP analytics, and resilient microservices.",
    profileImageUrl: "/assets/profile.jpg",
    description:
      "I build reliable, production-ready systems that scale. I like to combine clean backend architecture (Django, Spring Boot, Node) with pragmatic frontend UX (Angular, Flutter) and data-driven features (Python, NLP).",
    keyFacts: [
      "5+ years experience — 14 projects delivered",
      "Patent: SILI Tool (2024)",
      "SPOT Award — LenDenClub (2022)",
      "Built org-culture analytics for 5k+ employees"
    ],
    coreTech: [
      "Python",
      "Django",
      "Django REST Framework",
      "Node.js",
      "Angular",
      "Flutter",
      "PostgreSQL",
      "Docker",
      "AWS",
      "NLP / Transformers"
    ],
    hobbies: ["Game Development", "Piano", "Weightlifting", "Digital Painting"]
  },

  hero: {
    name: "Viraj Jiwane",
    title: "Senior Software Developer",
    backgroundImageUrl: "/assets/hero-bg.jpg",
    skills: ["Django", "Python", "Angular", "NLP", "System Design"],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/viraj-jiwane-33aa2b126/", icon: "linkedin" },
      { label: "GitHub", url: "https://github.com/virajjiwane", icon: "github" },
      { label: "Portfolio", url: "https://virajjiwane.onrender.com", icon: "globe" }
    ]
  },

  contact: {
    email: "vjiwane27@gmail.com",
    phone: "+91 79729 20267",
    location: "Pune, India",
    resumeUrl: "/assets/Viraj_Resume_2025.pdf",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/viraj-jiwane-33aa2b126/", iconSVG: "<svg/>" },
      { label: "GitHub", url: "https://github.com/virajjiwane", iconSVG: "<svg/>" }
    ]
  },

  experience: [
    {
      company: "Euracle Corp. (EDA Inc. client)",
      role: "Sr. Software Developer",
      startDate: "2023-06",
      endDate: "Present",
      responsibilities: [
        "Designed & shipped a scalable culture analytics pipeline (Python, sentence-transformers).",
        "Built GDPR-compliant dashboards and reporting portals (PHP, Vanilla JS) for enterprise clients.",
        "Optimized pipeline performance by ~85% through multiprocessing and query restructuring."
      ],
      technologies: ["Python", "Pandas", "Sentence Transformers", "PHP", "Docker", "Azure"],
      location: "Remote",
      companyLogoUrl: "/assets/logos/euracle.png",
      description:
        "Led backend and analytics features for org-culture product used by multiple enterprise customers.",
      websiteUrl: "https://euracle.example.com"
    },
    {
      company: "LenDenClub",
      role: "Software Developer",
      startDate: "2021-07",
      endDate: "2023-04",
      responsibilities: [
        "Led microservices for Lending, Funding & Disbursal platform (Django + REST).",
        "Reduced loan disbursal time by 98% with microservice redesign and automation.",
        "Mentored developers and implemented automation reducing support tickets by 57%."
      ],
      technologies: ["Django", "PostgreSQL", "Redis", "Docker", "Celery"],
      location: "Remote",
      companyLogoUrl: "/assets/logos/lendenclub.png",
      description: "Core backend engineer for lending platform and operational tooling.",
      websiteUrl: "https://lendenclub.example.com"
    },
    {
      company: "Amdocs",
      role: "Associate Software Engineer",
      startDate: "2020-09",
      endDate: "2021-07",
      responsibilities: [
        "Contributed to microservice orchestration and modernization using Spring Boot and Kubernetes.",
        "Introduced Selenium-based test automation to reduce manual QA effort."
      ],
      technologies: ["Spring Boot", "Kubernetes", "PostgreSQL", "Selenium"],
      location: "Remote",
      companyLogoUrl: "/assets/logos/amdocs.png",
      description: "Worked on network orchestration microservices and legacy modernization.",
      websiteUrl: "https://amdocs.com"
    }
  ],

  skillGroups: [
    {
      category: "Backend & APIs",
      iconUrl: "/assets/icons/backend.svg",
      colorHex: "#10B981",
      skills: [
        { name: "Django", level: "Expert" },
        { name: "REST APIs", level: "Expert" },
        { name: "Node.js", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" }
      ]
    },
    {
      category: "Data & ML",
      iconUrl: "/assets/icons/data.svg",
      colorHex: "#7C3AED",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "NLP / Transformers", level: "Advanced" },
        { name: "Pandas", level: "Advanced" }
      ]
    },
    {
      category: "Frontend & Mobile",
      iconUrl: "/assets/icons/frontend.svg",
      colorHex: "#3B82F6",
      skills: [
        { name: "Angular", level: "Advanced" },
        { name: "Flutter", level: "Advanced" },
        { name: "Modern CSS", level: "Advanced" }
      ]
    },
    {
      category: "DevOps & Infra",
      iconUrl: "/assets/icons/devops.svg",
      colorHex: "#EF4444",
      skills: [
        { name: "Docker", level: "Advanced" },
        { name: "CI/CD", level: "Advanced" },
        { name: "AWS / Azure", level: "Intermediate" }
      ]
    }
  ],

  projects: [
    {
      name: "Organizational Culture Analytics Pipeline",
      description:
        "Enterprise analytics pipeline for organization culture — NLP summarization, survey ingestion, and executive dashboards.",
      architecture: "/assets/arch-culture.svg",
      projectUrl: "https://virajjiwane.onrender.com/case-studies/culture-analytics",
      frontEndPoints: {
        title: "Frontend",
        points: ["GDPR-compliant dashboards", "Interactive charts & exports", "Deep-linking for mobile views"],
        titleColorHex: "#3B82F6"
      },
      backEndPoints: {
        title: "Backend",
        points: ["Sentence-transformers based summarization", "Multiprocessing ETL", "Azure Dockerized services"],
        titleColorHex: "#7C3AED"
      },
      achievements: {
        title: "Key Achievements",
        points: [
          "Handled analytics for 5000+ employees across 6 organisations",
          "85% pipeline performance improvement",
          "GDPR-compliant data handling for EU customers"
        ],
        titleColorHex: "#10B981"
      }
    },
    {
      name: "Lending & Disbursal Microservices",
      description:
        "Microservices-based lending, funding and disbursal platform that dramatically reduced disbursal latency.",
      architecture: "/assets/arch-lending.svg",
      projectUrl: "https://virajjiwane.onrender.com/case-studies/lending-platform",
      frontEndPoints: {
        title: "Frontend",
        points: ["Investor & borrower dashboards", "Real-time loan status", "PWA compatibility"],
        titleColorHex: "#3B82F6"
      },
      backEndPoints: {
        title: "Backend",
        points: ["Django microservices", "Redis caching & Celery workers", "PostgreSQL for transactional data"],
        titleColorHex: "#7C3AED"
      },
      achievements: {
        title: "Key Achievements",
        points: ["98% reduction in loan disbursal time", "Automations reduced support tickets by 57%"],
        titleColorHex: "#10B981"
      }
    },
    {
      name: "SILI Tool (Patent)",
      description:
        "Smart Inline Inspection tool — ML + IoT solution for inline inspection with patent granted in 2024.",
      architecture: "/assets/arch-sili.svg",
      projectUrl: "https://github.com/virajjiwane/sili-tool",
      frontEndPoints: {
        title: "Frontend",
        points: ["Django visualization", "3D inspection UI (Web)"],
        titleColorHex: "#3B82F6"
      },
      backEndPoints: {
        title: "Backend",
        points: ["Keras-based ML models", "Sensor data ingestion", "Automated alerting pipeline"],
        titleColorHex: "#7C3AED"
      },
      achievements: {
        title: "Key Achievements",
        points: ["Patent granted (SILI Tool, 2024)", "Hackathon winner — system prototype"],
        titleColorHex: "#10B981"
      }
    }
  ]
};

export default DATA;
