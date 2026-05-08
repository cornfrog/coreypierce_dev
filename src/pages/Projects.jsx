import { Box, Paper, Typography } from "@mui/material";
import Page from "../components/Page";

const PROJECTS_LIST = [
    {
        key: 'makepost-cli-project-key',
        githubURL: 'https://github.com/cornfrog/make-post-cli',
        npmURL: 'https://www.npmjs.com/package/make-post-cli',
        projectTitle: 'Make-Post-Cli',
        projectDescription: `
            A simple NPM CLI tool to quickly generate Markdown files for 
            blog posts with a predefined frontmatter template.        
        `,
        projectTools: [
            'js',
            'nodejs'
        ],
    },
    {
        key: 'sparkkit-cli-project-key',
        githubURL: 'https://github.com/cornfrog/SparkKit-CLI',
        npmURL: 'https://www.npmjs.com/package/sparkkit-cli',
        projectTitle: 'SparkKit-Cli',
        projectDescription: `
            Sparkkit-CLI is a powerful and easy-to-use command-line interface 
            for the Sparkkit developer kit. It streamlines the process of 
            setting up local projects and databases, allowing developers to 
            get started quickly and customize their environment as needed.
        `,
        projectTools: [
            'js',
            'nodejs'
        ],
    },
    {
        key: 'ember-project-key',
        githubURL: 'https://github.com/cornfrog/ember',
        projectTitle: 'Ember',
        projectDescription: `
            Ember is a full-stack project automation tool designed to streamline 
            the process of building and deploying web applications. Developed with 
            React, Express, and PostgreSQL, Ember leverages background scripting to 
            generate both frontend and backend projects, install necessary packages, 
            and manage deployments. The platform integrates seamlessly with GitHub 
            for version control and Cloudflare for hosting, enabling public access 
            to frontend projects with minimal effort. I currently use Ember to 
            rapidly create and launch sites for clients, reducing setup time and 
            boosting productivity.
        `,
        projectTools: [
            'js',
            'react',
            'prisma',
            'sass',
            'express',
            'psql',
            'bash',
        ],
    },
    {
        key: 'pierce-prints-project-key',
        githubURL: 'https://github.com/cornfrog/pierce-prints',
        projectTitle: 'Pierce Prints',
        projectDescription: `
            PiercePrints is a personal e-commerce platform tailored for the sale 
            of my own 3D prints. Developed with a focus on scalability and 
            security, Pierce Prints utilizes a robust tech stack including Next.js, 
            React, Prisma, and Zod. User authentication is managed efficiently 
            through Clerk, ensuring a safe and personalized experience for every 
            user. I am currently integrating the Stripe API into my application to 
            facilitate seamless online payment processing.
        `,
        projectTools: [
            'ts',
            'react',
            'prisma',
            'sass',
            'express',
            'psql',
            'nextjs',
        ],
    },
    {
        key: 'token-tracker-project-key',
        githubURL: 'https://github.com/cornfrog/pierce-prints',
        projectTitle: 'Token Tracker',
        projectDescription: `
            A website that allows users to track their favorite cryptocurrencies 
            and retrieve news articles about those currencies. Utilizes websockets 
            to relay real time crypto currency prices from Coinbase API and the 
            got library to retrieve relevant news articles from the NewsAPI while 
            using a PostgreSQL database to store users' data. Combines both React 
            and custom CSS for the front end user experience.`,
        projectTools: [
            'js',
            'react',
            'sass',
            'express',
            'psql',
            'nodejs',
        ],
    },
    {
        key: 'better-builds-project-key',
        githubURL: 'https://github.com/MarlonS419/better-builds',
        projectTitle: 'Better Builds',
        projectDescription: `
            A team project that utilized Git workflow, Peer Programming and Pull 
            Requests. As well as, Trello to keep track of implemented as well as 
            already added features. Users can post information about their PC 
            builds and other users can leave comments about it.
        `,
        projectTools: [
            'js',
            'react',
            'sass',
            'express',
            'psql',
            'nodejs',
        ],
    },
];

const ICON_LIST = [
    {
        key: 'bash-icon-key',
        tool: 'bash',
        path: './icons/bash.svg',
        title: 'Bash'
    },
    {
        key: 'express-icon-key',
        tool: 'express',
        path: './icons/express-js.svg',
        title: 'ExpressJS'
    },
    {
        key: 'github-icon-key',
        tool: 'github',
        path: './icons/github.svg',
        title: 'Github'
    },
    {
        key: 'js-icon-key',
        tool: 'js',
        path: './icons/javascript.svg',
        title: 'Javascript'
    },
    {
        key: 'nextjs-icon-key',
        tool: 'nextjs',
        path: './icons/nextjs.svg',
        title: 'NextJS'
    },
    {
        key: 'nodejs-icon-key',
        tool: 'nodejs',
        path: './icons/nodejs.svg',
        title: 'NodeJS'
    },
    {
        key: 'psql-icon-key',
        tool: 'psql',
        path: './icons/postgresql.svg',
        title: 'PSQL'
    },
    {
        key: 'prisma-icon-key',
        tool: 'prisma',
        path: './icons/prisma.svg',
        title: 'Prisma'
    },
    {
        key: 'react-icon-key',
        tool: 'react',
        path: './icons/react.svg',
        title: 'React'
    },
    {
        key: 'sass-icon-key',
        tool: 'sass',
        path: './icons/sass.svg',
        title: 'SASS'
    },
    {
        key: 'vitejs-icon-key',
        tool: 'vitejs',
        path: './icons/vitejs.svg',
        title: 'ViteJS'
    },
];

const ProjectTile = ({
    project,
}) => {

    const projectTools = project.projectTools.map((tool) => {
        const toolImage = ICON_LIST.find(icon => icon.tool === tool);
        if (toolImage) {
            return (
                <Box
                    key={toolImage.key}
                    title={toolImage.title}
                    component='img'
                    height='35px'
                    width='35px'
                    src={toolImage.path}
                />
            );
        }
    });

    return (
        <Box
            sx={{
                bgcolor: 'black',
                color: 'white',
                border: '.2rem solid white',
                borderRadius: '1rem',
                boxShadow: '0px 0px 15px rgb(98, 98, 98)',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                    paddingBottom: 1
                }}
            >
                <Typography sx={{ fontSize: '1.75rem' }}>{project.projectTitle}</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    <Box
                        component='img'
                        src='./icons/github.svg'
                        height='50px'
                        width='50px'
                        onClick={() => { window.open(project.githubURL, '_blank') }}
                        sx={{
                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }}
                    />
                    {
                        project.npmURL ?
                            <Box
                                component='img'
                                src='./icons/npm.svg'
                                height='50px'
                                width='50px'
                                onClick={() => { window.open(project.npmURL, '_blank') }}
                                sx={{
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }}
                            /> : ''
                    }
                </Box>
            </Box>
            <Typography
                sx={{
                    py: 3,
                    px: 2,
                    borderTop: '1px solid white',
                    borderBottom: '1px solid white',
                    fontSize: '1.25rem',
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {project.projectDescription}
            </Typography>
            <Box
                sx={{
                    paddingTop: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1
                }}
            >
                {projectTools}
            </Box>
        </Box>
    );
};

const Projects = () => {

    const projectTiles = PROJECTS_LIST.map((project) => {
        return (
            <ProjectTile
                key={project.key}
                project={project}
            />
        );
    });

    return (
        <Page>
            <Typography sx={{ textAlign: 'center', fontSize: '3rem', mt: 3.5}}>Projects</Typography>
            <Box
                sx={{
                    bgcolor: 'black',
                    color: 'white',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    rowGap: 3,
                    columnGap: 2,
                    p: 2,
                    minHeight: '100vh',
                    '@media (max-width: 867px)': {
                        gridTemplateColumns: '1fr',
                    },
                }}
            >
                {projectTiles}
            </Box>
        </Page>
    );

};

export default Projects;