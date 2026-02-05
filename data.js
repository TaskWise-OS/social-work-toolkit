// Evidence-based tools and frameworks for Australian social work practice
const TOOLKIT_DATABASE = [
    {
        id: 1,
        name: "Signs of Safety",
        category: "Assessment Framework",
        description: "A strengths-based, safety-organized approach to child protection casework. Widely used across Australian child protection services to assess risk and safety in families.",
        practiceAreas: ["child-protection", "family-services"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: true,
        url: "https://www.signsofsafety.net/"
    },
    {
        id: 2,
        name: "SDM (Structured Decision Making) Tools",
        category: "Risk Assessment",
        description: "Evidence-based assessment tools that provide structured frameworks for screening, risk assessment, and case planning in child protection.",
        practiceAreas: ["child-protection"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: true,
        url: "https://www.nccdglobal.org/structured-decision-making"
    },
    {
        id: 3,
        name: "ACAT Assessment Framework",
        category: "Assessment Framework",
        description: "Comprehensive assessment framework for older Australians to determine eligibility for government-funded aged care services.",
        practiceAreas: ["aged-care"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: false,
        url: "https://www.myagedcare.gov.au/assessment/acat-assessments"
    },
    {
        id: 4,
        name: "NDIS Planning Framework",
        category: "Support Planning",
        description: "Person-centered planning approach for developing NDIS plans that identify goals, supports, and funding for people with disability.",
        practiceAreas: ["disability"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: true,
        url: "https://www.ndis.gov.au/understanding/how-ndis-works/planning-your-supports"
    },
    {
        id: 5,
        name: "MARAM Framework",
        category: "Risk Assessment",
        description: "Victoria's framework for identifying and responding to family violence risk. Provides shared understanding and collaborative approach across services.",
        practiceAreas: ["domestic-violence", "family-services", "child-protection"],
        jurisdiction: ["vic"],
        traumaInformed: true,
        url: "https://www.vic.gov.au/maram-practice-guides-and-resources"
    },
    {
        id: 6,
        name: "DVSAT Tool",
        category: "Risk Assessment",
        description: "Structured tool for assessing immediate safety risks in domestic violence situations, used across multiple Australian jurisdictions.",
        practiceAreas: ["domestic-violence"],
        jurisdiction: ["nsw", "qld", "wa", "sa"],
        traumaInformed: true,
        url: "https://www.domesticviolence.nsw.gov.au/practitioners/risk-assessment"
    },
    {
        id: 7,
        name: "K10 Psychological Distress Scale",
        category: "Screening Tool",
        description: "Brief 10-item questionnaire measuring psychological distress. Widely used in Australian mental health services for screening and outcome measurement.",
        practiceAreas: ["mental-health", "youth", "family-services"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: false,
        url: "https://www.tac.vic.gov.au/files-to-move/media/upload/k10_english.pdf"
    },
    {
        id: 8,
        name: "AUDIT Screening Tool",
        category: "Screening Tool",
        description: "WHO-developed screening tool for identifying hazardous and harmful alcohol consumption. Recommended by Australian alcohol treatment guidelines.",
        practiceAreas: ["substance-use", "mental-health", "youth"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: false,
        url: "https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a"
    },
    {
        id: 9,
        name: "Genogram",
        category: "Assessment Tool",
        description: "Visual representation of family relationships, patterns, and history across generations. Essential tool for understanding family dynamics in social work practice.",
        practiceAreas: ["family-services", "child-protection", "mental-health", "youth"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: true,
        url: "https://www.ncbi.nlm.nih.gov/books/NBK470530/"
    },
    {
        id: 10,
        name: "Ecomap",
        category: "Assessment Tool",
        description: "Visual tool mapping a person's or family's connections to external systems and resources. Identifies strengths, stressors, and support networks.",
        practiceAreas: ["family-services", "child-protection", "disability", "aged-care", "mental-health"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: true,
        url: "https://www.ncbi.nlm.nih.gov/books/NBK470530/"
    },
    {
        id: 11,
        name: "Trauma-Informed Care Principles",
        category: "Practice Framework",
        description: "Framework for understanding and responding to the impact of trauma. Emphasizes safety, trustworthiness, peer support, collaboration, empowerment, and cultural considerations.",
        practiceAreas: ["mental-health", "child-protection", "domestic-violence", "youth", "family-services"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: true,
        url: "https://www.blueknot.org.au/workers-practitioners/for-health-professionals/trauma-informed-care-and-practice/"
    },
    {
        id: 12,
        name: "Motivational Interviewing",
        category: "Intervention Approach",
        description: "Collaborative, person-centered counseling approach for strengthening motivation and commitment to change. Evidence-based for substance use and behavior change.",
        practiceAreas: ["substance-use", "mental-health", "youth", "family-services"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: true,
        url: "https://motivationalinterviewing.org/"
    },
    {
        id: 13,
        name: "Solution-Focused Brief Therapy",
        category: "Intervention Approach",
        description: "Strengths-based therapeutic approach focusing on solutions rather than problems. Emphasizes client resources, goals, and exceptions to problems.",
        practiceAreas: ["family-services", "youth", "mental-health", "child-protection"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: true,
        url: "https://www.sfbta.org/"
    },
    {
        id: 14,
        name: "Aboriginal and Torres Strait Islander Cultural Safety Framework",
        category: "Practice Framework",
        description: "Framework ensuring culturally safe and responsive practice with Aboriginal and Torres Strait Islander peoples. Addresses historical trauma and promotes self-determination.",
        practiceAreas: ["child-protection", "family-services", "mental-health", "youth", "aged-care", "disability"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: true,
        url: "https://www.aihw.gov.au/reports/indigenous-australians/cultural-safety-health-care-framework"
    },
    {
        id: 15,
        name: "Safety Planning (Suicide Prevention)",
        category: "Intervention Tool",
        description: "Collaborative tool for developing personalized safety plans with individuals at risk of suicide. Identifies warning signs, coping strategies, and support contacts.",
        practiceAreas: ["mental-health", "youth"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: true,
        url: "https://www.suicideispreventable.org.au/resources/safety-planning"
    },
    {
        id: 16,
        name: "Functional Family Therapy",
        category: "Intervention Program",
        description: "Evidence-based family intervention for youth with behavioral problems. Focuses on improving family communication, problem-solving, and relationships.",
        practiceAreas: ["youth", "family-services"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa"],
        traumaInformed: true,
        url: "https://www.fftllc.com/"
    },
    {
        id: 17,
        name: "Circle of Security",
        category: "Parenting Program",
        description: "Attachment-based parenting program helping caregivers understand children's emotional needs and provide secure relationships.",
        practiceAreas: ["child-protection", "family-services", "youth"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: true,
        url: "https://www.circleofsecurityinternational.com/"
    },
    {
        id: 18,
        name: "Triple P Positive Parenting Program",
        category: "Parenting Program",
        description: "Multi-level parenting and family support system developed in Australia. Provides evidence-based strategies for promoting positive parenting.",
        practiceAreas: ["family-services", "child-protection", "youth"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: false,
        url: "https://www.triplep.net/glo-en/home/"
    },
    {
        id: 19,
        name: "Strengths and Difficulties Questionnaire",
        category: "Screening Tool",
        description: "Brief behavioral screening questionnaire for children and young people aged 2-17. Assesses emotional symptoms, conduct, hyperactivity, peer relationships, and prosocial behavior.",
        practiceAreas: ["child-protection", "youth", "mental-health", "family-services"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: false,
        url: "https://www.sdqinfo.org/"
    },
    {
        id: 20,
        name: "CALD Practice Framework",
        category: "Practice Framework",
        description: "Framework for culturally responsive practice with people from culturally and linguistically diverse backgrounds. Addresses language barriers, cultural values, and migration experiences.",
        practiceAreas: ["family-services", "child-protection", "mental-health", "aged-care", "disability"],
        jurisdiction: ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"],
        traumaInformed: true,
        url: "https://www.fecca.org.au/resources/"
    }
];

const PRACTICE_AREAS = {
    "child-protection": {
        name: "Child Protection",
        keywords: ["child", "children", "protection", "safety", "abuse", "neglect", "foster", "kinship"]
    },
    "mental-health": {
        name: "Mental Health",
        keywords: ["mental health", "depression", "anxiety", "suicide", "psychological", "wellbeing"]
    },
    "family-services": {
        name: "Family Services",
        keywords: ["family", "parenting", "relationships", "family support"]
    },
    "disability": {
        name: "Disability Support",
        keywords: ["disability", "NDIS", "support coordination", "accessibility"]
    },
    "aged-care": {
        name: "Aged Care",
        keywords: ["aged", "older", "elderly", "seniors", "dementia"]
    },
    "youth": {
        name: "Youth Services",
        keywords: ["youth", "young people", "adolescent", "teenager"]
    },
    "domestic-violence": {
        name: "Domestic Violence",
        keywords: ["domestic violence", "family violence", "intimate partner", "DV", "FV"]
    },
    "substance-use": {
        name: "Substance Use",
        keywords: ["alcohol", "drugs", "substance", "addiction", "AOD"]
    }
};
