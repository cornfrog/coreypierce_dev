import { Box, Paper, Typography } from "@mui/material";
import Page from "../components/Page";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect } from 'react'

const Home = () => {

    return (
        <Page>
            <Box
                sx={{
                    py: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    bgcolor: 'black',
                    color: 'white'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        gap: 10,
                        pb: 2,
                        '@media (max-width: 800px)': {
                            gap: 5,
                            flexDirection: 'column',
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 1.5,
                            width: '50%',
                            '@media (max-width: 800px)': {
                                width: '85%',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: '100%',
                                '@media (max-width: 548px)': {
                                    marginTop: 2,
                                },
                            }}
                        >
                            <Box
                                component='img'
                                src="./my-photo.jpeg"
                                sx={{
                                    height: '250px',
                                    width: '250px',
                                    borderRadius: '100%',
                                }}
                            />
                        </Box>
                        <Typography
                            sx={{
                                fontSize: '2rem',
                                color: 'white',
                                opacity: 0,
                                transform: 'translateY(10px)',
                                animation: 'fadeInUp 0.8s ease-out forwards',
                                '@keyframes fadeInUp': {
                                    to: {
                                        opacity: 1,
                                        transform: 'translateY(0)',
                                    },
                                },
                            }}
                        >
                            Welcome!
                        </Typography>
                        <Box
                            sx={{
                                py: 3,
                                px: 4,
                                border: '.2rem solid white',
                                borderRadius: '1rem',
                                boxShadow: '0px 0px 40px rgb(98, 98, 98)',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '1.25rem',
                                    mb: '1rem'
                                }}
                            >
                                Hi, I&apos;m Corey Pierce! A Front-End Developer at LoyaltyLoop with a love for all things tech.
                                My background ranges from building a solid programming foundation in college, to IT work that
                                sharpened my problem-solving and teamwork skills, to Launch Academy where I picked up modern
                                web development practices.
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '1.25rem'
                                }}
                            >
                                These days I focus on creating clean, intuitive user interfaces
                                for a SaaS platform, while still keeping my curiosity alive in areas like Web3, data analysis,
                                and cybersecurity. This site is where I share my projects, ideas, and experiments
                                I hope you enjoy exploring it!
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                py: 3,
                                px: 4,
                                border: '.2rem solid white',
                                borderRadius: '1rem',
                                boxShadow: '0px 0px 40px rgb(98, 98, 98)',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: 1,
                                    '@media (max-width: 454px)': {
                                        flexDirection:  'column',
                                        gap: 1.5
                                    },
                                }}
                            >
                                <Typography sx={{ fontSize: '1.15rem' }}>Find me on:</Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 2
                                    }}
                                >
                                    <Box
                                        component={'img'}
                                        src="./icons/github.svg"
                                        title="My Guthub Account"
                                        height={'40px'}
                                        width={'40px'}
                                        onClick={() => { window.open('https://github.com/cornfrog', '_blank') }}
                                        sx={{ '&:hover': { cursor: 'pointer' } }}
                                    />
                                    <Box
                                        component={'img'}
                                        src="./icons/linkedin.svg"
                                        title="My LinkedIn Account"
                                        height={'40px'}
                                        width={'40px'}
                                        onClick={() => { window.open('https://www.linkedin.com/in/coreypierce-/', '_blank') }}
                                        sx={{ '&:hover': { cursor: 'pointer' } }}
                                    />
                                    <Box
                                        component={'img'}
                                        src="./icons/npm.svg"
                                        title="My NPM Account"
                                        height={'40px'}
                                        width={'40px'}
                                        onClick={() => { window.open('https://www.npmjs.com/~cornfrog', '_blank') }}
                                        sx={{ '&:hover': { cursor: 'pointer' } }}
                                    />
                                    <Box
                                        component={'img'}
                                        src="./icons/rss.svg"
                                        title="My Blog"
                                        height={'40px'}
                                        width={'40px'}
                                        onClick={() => { window.open('https://cornfrog.blog/', '_blank') }}
                                        sx={{ '&:hover': { cursor: 'pointer' } }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <HomePageCarousel />
                </Box>
            </Box>
        </Page>
    );

};

const CAROUSEL_IMAGE_PATHS = [
    {
        key: 'js-carousel-img',
        src: './icons/javascript.svg'
    },
    {
        key: 'node-carousel-img',
        src: "./icons/nodejs.svg"
    },
    {
        key: 'psql-carousel-img',
        src: "./icons/postgresql.svg"
    },
    {
        key: 'react-carousel-img',
        src: "./icons/react.svg"
    },
    {
        key: 'vite-carousel-img',
        src: "./icons/vitejs.svg"
    },
    {
        key: 'prisma-carousel-img',
        src: "./icons/prisma.svg"
    },
]

const CarouselImages = () => {
    return (
        CAROUSEL_IMAGE_PATHS.map((image) => {
            return (
                <Box
                    key={image.key}
                    component='img'
                    src={image.src}
                    sx={{
                        flex: '0 0 100%',
                        minWidth: 0,
                    }}
                />
            )
        })
    )
};

const HomePageCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({
        delay: 2250
    })]);

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.plugins().autoplay?.play()
    }, [emblaApi]);

    return (
        <Box
            sx={{
                overflow: 'hidden',
                height: '25%',
                width: '25%',
                '@media (max-width: 800px)': {
                    height: '50%',
                    width: '50%',
                },
            }}
            ref={emblaRef}
        >
            <Box
                sx={{
                    display: 'flex',
                    touchAction: 'pan-y pinch-zoom',
                }}
            >
                <CarouselImages />
            </Box>
        </Box>
    );
};

export default Home;