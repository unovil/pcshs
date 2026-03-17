export const juniorHighCurricula: {
    grade: number;
    coreSubjects: { subject: string; units: number }[];
    additionalSubjects: { subject: string; units: number }[];
    electiveSubjects?: { subject: string; units: number }[];
}[] = [
    {
        grade: 7,
        coreSubjects: [
            { subject: "Science 7", units: 1 },
            { subject: "Mathematics 7", units: 1},
            { subject: "English 7", units: 1 },
            { subject: "Filipino 7", units: 1 },
            { subject: "Araling Panlipunan 7", units: 1 },
            { subject: "MAPEH 7", units: 1 },
            { subject: "Values Education 7", units: 1 },
            { subject: "Creative Tech 7", units: 1 }
        ],
        additionalSubjects: [
            { subject: "Elementary Algebra", units: 1 },
            { subject: "Environmental Science 7", units: 1 },
            { subject: "Research 1", units: 1 }
        ]
    },
    {
        grade: 8,
        coreSubjects: [
            { subject: "Science 8", units: 1 },
            { subject: "Mathematics 8", units: 1 },
            { subject: "English 8", units: 1 },
            { subject: "Filipino 8", units: 1 },
            { subject: "Araling Panlipunan 8", units: 1 },
            { subject: "MAPEH 8", units: 1 },
            { subject: "Values Education 8", units: 1 },
            { subject: "Creative Tech 8", units: 1 }
        ],
        additionalSubjects: [
            { subject: "Advanced Algebra", units: 1 },
            { subject: "Biotech", units: 1 },
            { subject: "Research 2", units: 1 }
        ]
    },
    {
        grade: 9,
        coreSubjects: [
            { subject: "Science 9", units: 1 },
            { subject: "Mathematics 9", units: 1 },
            { subject: "English 9", units: 1 },
            { subject: "Filipino 9", units: 1 },
            { subject: "Araling Panlipunan 9", units: 1 },
            { subject: "MAPEH 9", units: 1 },
            { subject: "Edukasyon sa Pagpapakatao 9", units: 1 },
            { subject: "Creative Tech 9", units: 1 }
        ],
        additionalSubjects: [
            { subject: "Consumer Chemistry", units: 1 },
            { subject: "Research 3", units: 1 },
            { subject: "Advanced Geometry", units: 1 }
        ],
        electiveSubjects: [
            { subject: "Electromagnetism", units: 1 },
            { subject: "Mandarin 1", units: 1 },
            { subject: "Spanish 1", units: 1 }
        ]
    },
    {
        grade: 10,
        coreSubjects: [
            { subject: "Science 10", units: 1 },
            { subject: "Mathematics 10", units: 1 },
            { subject: "English 10", units: 1 },
            { subject: "Filipino 10", units: 1 },
            { subject: "Araling Panlipunan 10", units: 1 },
            { subject: "MAPEH 10", units: 1 },
            { subject: "Edukasyon sa Pagpapakatao 10", units: 1 },
            { subject: "Creative Tech 10", units: 1 }
        ],
        additionalSubjects: [
            { subject: "Research 4", units: 1 },
            { subject: "Trigonometry", units: 1 },
            { subject: "Advanced Physics", units: 1 }
        ],
        electiveSubjects: [
            { subject: "Human Anatomy and Physiology", units: 1 },
            { subject: "Nihingo 2 / Mandarin 2 / Spanish 2", units: 1 }
        ]
    }
]

export const seniorHighCurricula: {
    grade: number;
    firstSemesterSubjects: { subject: string; units: number }[];
    secondSemesterSubjects: { subject: string; units: number }[];
}[] = [
    {
        grade: 11,
        firstSemesterSubjects: [
            { subject: "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino", units: 1 },
            { subject: "Reading and Writing", units: 1 },
            { subject: "Understanding Culture, Society and Politics", units: 1 },
            { subject: "Statistics and Probability", units: 1 },
            { subject: "Earth Science", units: 1 },
            { subject: "Health Optimizing Physical Education 1", units: 1 },
            { subject: "Practical Research 1 (Qualitative Research)", units: 1 },
            { subject: "Pre-Calculus", units: 1 },
            { subject: "General Chemistry 1", units: 1 }
        ],
        secondSemesterSubjects: [
            { subject: "Pagbasa at Pagsusuri ng Iba't-Ibang Teksto Tungo sa Pananaliksik", units: 1 },
            { subject: "21st Century Literature from the Philippines and the World", units: 1 },
            { subject: "Introduction to Philosophy of the Human Person", units: 1 },
            { subject: "General Mathematics", units: 1 },
            { subject: "Disaster Readiness and Risk Reduction", units: 1 },
            { subject: "Health Optimizing Physical Education 2", units: 1 },
            { subject: "Practical Research 2 (Quantitative Research)", units: 1 },
            { subject: "Basic Calculus", units: 1 },
            { subject: "General Chemistry 2", units: 1 }
        ]
    },
    {
        grade: 12,
        firstSemesterSubjects: [
            { subject: "Health Optimizing Physical Education 3", units: 1 },
            { subject: "Oral Communication", units: 1 },
            { subject: "Media and Information Literacy", units: 1 },
            { subject: "Personal Development", units: 1 },
            { subject: "Filipino sa Piling Larangan", units: 1 },
            { subject: "General Biology 1", units: 1 },
            { subject: "General Physics 1", units: 1 },
            { subject: "Inquiries, Investigation and Immersion", units: 1 }
        ],
        secondSemesterSubjects: [
            { subject: "Health Optimizing Physical Education 4", units: 1 },
            { subject: "English for Academic and Professional Purposes", units: 1 },
            { subject: "Empowerment Technologies", units: 1 },
            { subject: "Contemporary Philippine Arts from the Region", units: 1 },
            { subject: "Entrepreneurship", units: 1 },
            { subject: "General Biology 2", units: 1 },
            { subject: "General Physics 2", units: 1 },
            { subject: "Work Immersion / Research / Capstone", units: 1 }
        ]
    }
]

