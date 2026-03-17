type GradingSystem = {
    subject: string;
    weights: {
        written: number;
        performance: number;
        assessment: number;
    }
}

export const juniorHighGradingSystem: GradingSystem[] = [
    {
        subject: "Science (Core, Add-Ons & Electives)",
        weights: {
            written: 40,
            performance: 40,
            assessment: 20
        }
    },
    {
        subject: "Math",
        weights: {
            written: 40,
            performance: 40,
            assessment: 20
        }
    },
    {
        subject: "English including SPFL",
        weights: {
            written: 30,
            performance: 50,
            assessment: 20
        }
    },
    {
        subject: "Araling Panlipunan",
        weights: {
            written: 30,
            performance: 50,
            assessment: 20
        }
    },
    {
        subject: "Creative Tech",
        weights: {
            written: 20,
            performance: 60,
            assessment: 20
        }
    },
    {
        subject: "MAPEH",
        weights: {
            written: 20,
            performance: 60,
            assessment: 20
        }
    },
    {
        subject: "Filipino",
        weights: {
            written: 30,
            performance: 50,
            assessment: 20
        }
    },
    {
        subject: "VE / ESP",
        weights: {
            written: 30,
            performance: 50,
            assessment: 20
        }
    }
]

export const seniorHighGradingSystem: GradingSystem[] = [
    {
        subject: "Core Subjects",
        weights: {
            written: 25,
            performance: 50,
            assessment: 25
        }
    },
    {
        subject: "All Other Subjects",
        weights: {
            written: 25,
            performance: 45,
            assessment: 30
        }
    },
    {
        subject: "Work Immersion / Research / Capstone",
        weights: {
            written: 35,
            performance: 40,
            assessment: 25
        }
    }
]