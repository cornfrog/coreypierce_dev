import { Box, gridClasses, TablePagination, Typography } from "@mui/material";
import Page from "../components/Page";
import { blue } from "@mui/material/colors";


const EXPERIENCE_LIST = [
    {
        key: 'loyalty-loop-key',
        title: 'Frontend Developer',
        name: 'Loyalty Loop',
        startTime: 'July 2024',
        endTime: 'Current',
        logo: './public/logos/loyalty-loop-logo.jpeg',
        description: `
            Contribute to the development of LoyaltyLoop's SaaS platform by building, testing, 
            and maintaining front-end features and enhancements, collaborating with a small 
            development team on product planning and roadmap execution, utilizing Git/Bitbucket 
            for version control and Trello for project management.
        `,
        skills: [
            'Javascript',
            'React',
            'Backbone',
            'Sass',
            'Git',
            'Bitbucket',
        ],
    },
    {
        key: 'launch-academy-key',
        title: 'Apprentice',
        name: 'Launch Academy',
        startTime: 'October 2023',
        endTime: 'February 2024',
        logo: './public/logos/launch-academy-logo.png',
        description: `
            Utilized frameworks like React and Express to integrate into self-made web applications, 
            implemented Test Driven Development methodologies, and collaborated with cohort members 
            on pair programming assignments, employing Agile methodologies and Git workflow for 
            seamless development.        
        `,
        skills: [
            'HTML',
            'CSS',
            'Javascript',
            'Sass',
            'NodeJS',
            'ES6',
            'Postgresql',
        ],
    },
    {
        key: 'federal-electronics-key',
        title: 'IT Helpdesk',
        name: 'Federal Electronics',
        startTime: 'June 2022',
        endTime: 'October 2023',
        logo: './public/logos/federal-electronics-logo.png',
        description: `
            Managedsecurity operations for government contracts in a NIST-compliant environment, 
            utilizing SIEM tools like Atera, Webroot, and SentinelOne to track and administer 
            network activity. Coordinated with external MSPs for network maintenance and upgrades, 
            while implementing scripting solutions to automate repetitive tasks.        
        `,
        skills: [
            'Windows',
            'Active Directory',
            'Powershell',
            'NIST',
            'Office 365'
        ],
    },
    {
        key: 'el-harvey-key',
        title: 'IT Helpdesk',
        name: 'E.L Harvey & Sons',
        startTime: 'January 2021',
        endTime: 'June 2022',
        logo: './public/logos/el-harvey-logo.png',
        description: `
            Provided comprehensive IT support for E.L. Harvey employees, including responding to help 
            desk tickets, administering user accounts and overseeing hardware and software, while 
            collaborating with third-party services to address hardware and software issues, and 
            actively monitoring and maintaining network infrastructure.        
        `,
        skills: [
            'Windows',
            'Active Directory',
            'Powershell',
            'Office 365',
        ],
    },
    {
        key: 'mit-key',
        title: 'IT Helpdesk',
        name: 'MIT',
        startTime: 'April 2019',
        endTime: 'January 2020',
        logo: './public/logos/mit-logo.png',
        description: `
            Managed support tickets in conjunction with MIT staff, conducting thorough evaluations to 
            identify root causes and collaborating with team members to achieve 100% resolution. 
            Additionally, performed installation and configuration of computer hardware, software, 
            systems, networks, printers, and scanners.        
        `,
        skills: [
            'Windows',
            'MacOS',
            'Active Directory',
            'Powershell',
            'Office 365',
        ],
    },
];

const EDUCATION_LIST = [
    {
        key: 'wentworth-key',
        name: 'Wentworth Institute of Technology',
        award: 'Bachelor of Computer Science',
        logo: './public/logos/wentworth-logo.jpeg',
        startYear: '2016',
        endYear: '2020',
        skills: [
            'C',
            'Java',
            'Python',
            'SQL',
            'Data Structures',
            'Algorithms',
        ]
    }
];

const ExperienceTile = ({ experience }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '.2rem solid white',
                boxShadow: '0px 0px 15px rgb(98, 98, 98)',
                borderRadius: '1rem',
                p: 2
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    px: 2,
                    paddingBottom: 2,
                    mb: 2,
                    borderBottom: '1px solid white',
                    width: '100%'
                }}
            >
                <Box
                    component={'img'}
                    height={'80px'}
                    width={'80px'}
                    src={experience.logo}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <Typography>{experience.name}</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 1
                        }}
                    >
                        {experience.startTime}
                        -
                        {experience.endTime}
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1,
                    pb: 2,
                    borderBottom: '1px solid white'
                }}
            >
                <Typography sx={{ fontSize: '1.25rem' }}>{experience.title}</Typography>
                <Typography sx={{ fontSize: '1.15rem' }}>{experience.description}</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 3,
                    mt: 2
                }}
            >
                {
                    experience.skills.map((skill, index) => {
                        return (
                            <Typography
                                key={index}
                                sx={{
                                    fontSize: '1.15rem'
                                }}
                            >
                                {skill}
                            </Typography>
                        )
                    })
                }
            </Box>
        </Box>
    );
};

const ExperienceList = ({ experiences }) => {

    const experienceList = experiences.map((experience) => {
        return (
            <ExperienceTile key={experience.key} experience={experience} />
        );
    });

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                rowGap: 3,
                columnGap: 2,
                p: 2,
                '@media (max-width: 1054px)': {
                    gridTemplateColumns: '1fr',
                },
            }}
        >
            {experienceList}
        </Box>
    );
};

const EducationTile = ({ education }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 4,
                border: '.2rem solid white',
                boxShadow: '0px 0px 15px rgb(98, 98, 98)',
                borderRadius: '1rem',
                p: 2,
                '@media (max-width: 600px)': {
                    flexDirection: 'column',
                },
            }}
        >
            <Box
                component={'img'}
                src={education.logo}
                height={'200px'}
                width={'200px'}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1.5
                }}
            >
                <Typography sx={{ fontSize: '1.5rem' }}>{education.name}</Typography>
                <Typography sx={{ fontSize: '1.25rem' }}>{education.award}</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    {education.startYear}
                    -
                    {education.endYear}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1.5,
                        flexWrap: 'wrap',
                    }}
                >
                    {
                        education.skills.map((skill, index) => {
                            return (
                                <Typography
                                    key={index}
                                    sx={{
                                        fontSize: '1.15rem'
                                    }}
                                >
                                    {skill}
                                </Typography>
                            )
                        })
                    }
                </Box>
            </Box>
        </Box>
    );
};

const EducationList = ({ educationMap }) => {
    const educationList = educationMap.map((education) => {
        return (
            <EducationTile
                key={education.key}
                education={education}
            />
        )
    })

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1
            }}
        >
            {educationList}
        </Box>
    );
};

const Experiences = () => {

    return (
        <Page>
            <Box
                sx={{
                    bgcolor: 'black',
                    color: 'white',
                    minHeight: '100vvh',
                    p: 2
                }}
            >
                <Typography sx={{ fontSize: '3rem', textAlign: 'center', pt: 2 }}>Experiences</Typography>
                <ExperienceList experiences={EXPERIENCE_LIST} />
                <Typography sx={{ fontSize: '3rem', textAlign: 'center', pt: 2 }}>Education</Typography>
                <EducationList educationMap={EDUCATION_LIST} />
            </Box>
        </Page>
    );

};

export default Experiences;