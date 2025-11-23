// src/data/resumeData.ts

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  tagline: string;
}

export interface Education {
  school: string;
  level: string;
  major: string;
  year: string;
}

export interface Project {
  org: string;
  title: string;
  role: string;
  year: string;
  tech: string[];
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface Skill {
  category: string;
  level: number; // 1–5 scale
  items: string[];
}

export interface ResumeData {
  profile: Profile;
  education: Education[];
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  certifications: string[];
  achievements: string[];
}

const resumeData: ResumeData = {
  profile: {
    name: "Aditya Dadheech",
    title: "Project Engineer • Team Lead • Full-Stack & IAM",
    location: "Pune, Maharashtra, India",
    email: "Dadheech.aditya041@gmail.com",
    phone: "+91 8107966141",
    linkedin: "https://linkedin.com/in/f1oppy",
    tagline:
      "Building reliable systems, leading teams, and optimising identity & access at scale.",
  },

  education: [
    {
      school: "St. Paul’s Sr. Sec. School",
      level: "High School",
      major: "Science (Biology)",
      year: "2017",
    },
    {
      school: "Jaipur National University",
      level: "B.Tech",
      major: "Biotechnology",
      year: "2018 – 2022",
    },
  ],

  projects: [
    {
      org: "Rapture Biotech",
      title:
        "Computer Aided Drug Designing and Development for Pharmacological Inhibition of Chronic Lymphocytic Leukemia",
      role: "Research Intern",
      year: "2022 (6 Months)",
      tech: ["Molecular Modelling", "CADD"],
      description:
        "Designed and evaluated drug candidates computationally to inhibit CLL pathways and support pre-clinical research.",
    },
    {
      org: "Wipro Technologies",
      title:
        "Full-Stack Banking Web Application with Secure AWS Deployment and Authentication",
      role: "Full-Stack Intern",
      year: "2022 (6 Months)",
      tech: ["Angular", "REST API", "MongoDB", "AWS"],
      description:
        "Built a banking web app end-to-end with REST APIs and secure cloud deployment, focusing on availability and authentication.",
    },
  ],

  experience: [
    {
      company: "Wipro Technologies – Client (Crédit Suisse)",
      role: "Project Engineer – FSD Developer – L1",
      period: "2022 – 2023",
      bullets: [
        "Maintained RESTful APIs in Java Spring Boot, ensuring high availability and secure data transactions.",
        "Developed and deployed application components on AWS (S3, EKS, VPC, Docker) for a high-availability online banking platform.",
        "Implemented Amazon CloudWatch monitoring for application performance and system metrics to enable proactive issue resolution.",
      ],
      tags: ["Java", "Spring Boot", "REST API", "AWS", "CloudWatch"],
    },
    {
      company: "Wipro Technologies – Client (JTI – Japan Tobacco International)",
      role: "Project Engineer – Crisis Manager – L2",
      period: "2023 – 2025",
      bullets: [
        "Transitioned services from legacy/server accounts to managed serverless stacks with improved reliability and observability.",
        "Implemented and maintained IAM solutions across AD Connect, MS Exchange, Entra ID, and On-Prem AD.",
        "Collaborated with global security teams to deploy Zero Trust architecture, MFA, CAP and RBAC policies.",
        "Coordinated network access migration (VPN, GSA) with staged pilots and rollback runbooks to minimise incidents.",
        "Delivered ServiceNow FSM solutions for AGV lifecycle and local IT support in Trier, Germany.",
        "Supported API customisations and integrations using Postman and GitHub, improving UAT quality.",
        "Managed thousands of devices via Microsoft Intune, automating deployment, compliance, and patching.",
      ],
      tags: [
        "Identity & Access Management",
        "Zero Trust",
        "Networking",
        "ServiceNow FSM",
        "Intune",
      ],
    },
    {
      company: "Wipro Technologies – Client (JTI – Japan Tobacco International)",
      role: "Project Engineer – Team Lead – L1",
      period: "2025 – Present",
      bullets: [
        "Functioning as SME/POC for Global Software Management, IAM, and Azure cloud solutions.",
        "Increased first-contact resolution with standardised runbooks and knowledge base articles.",
        "Authored SOW-aligned project documents and executive-ready decks, improving onboarding and change readiness.",
        "Recognised with multiple performance and client satisfaction awards for independent leadership and delivery.",
        "Provide technical guidance and leadership to a team of 8 analysts, managing escalations and operations.",
        "Analyse team data to optimise processes, productivity, and quality outcomes.",
      ],
      tags: ["Leadership", "Operations", "Knowledge Management", "Client-facing"],
    },
  ],

  skills: [
    {
      category: "Backend & APIs",
      level: 2,
      items: ["Java", "Spring Boot", "REST APIs", "Postman"],
    },
    {
      category: "Cloud & DevOps",
      level: 2,
      items: ["AWS (S3, EKS, VPC)", "Docker", "Amazon CloudWatch"],
    },
    {
      category: "Identity & Security",
      level: 4,
      items: [
        "AD Connect",
        "Entra ID",
        "On-Prem AD",
        "MS Exchange",
        "Zero Trust Network Access",
        "MFA, CAP, RBAC",
        "Microsoft Purview",
      ],
    },
    {
      category: "Device & Endpoint Management",
      level: 4,
      items: ["Microsoft Intune", "Compliance Policies", "Patch Management"],
    },
    {
      category: "Networking & Access",
      level: 4,
      items: ["VPN", "GSA", "Secure Access", "Runbooks"],
    },
    {
      category: "Service Management",
      level: 3,
      items: ["ServiceNow FSM", "ITIL", "Hypercare", "Change Management"],
    },
    {
      category: "Leadership & Collaboration",
      level: 5,
      items: [
        "Team Management (8 analysts)",
        "Client Support & Exec POC",
        "Training & Knowledge Base",
        "Operations & Reporting",
      ],
    },
  ],

  certifications: [
    "Java Full-Stack – RPS-NIIT (with Wipro)",
    "AWS Certified Developer – Associate",
    "Complete Python Bootcamp (Zero to Hero)",
    "Generative AI Fundamentals (L2, L3)",
    "AWS Partner: Migration Essentials (Technical)",
    "AWS-DevOps: DevOps Engineering on AWS — Trainocate",
  ],

  achievements: [
    "Inspiring Performance – Excellent Performance in JTI Account",
    "The Extraordinaire – Exceptional Project Contribution",
    "Habit Star – Best performer for consecutive years (2023–2025)",
    "Promoted to Crisis Manager – Managing High Priority escalations",
    "Promoted to Team Lead – Leading a team of 8 Analysts",
  ],
};

export default resumeData;
