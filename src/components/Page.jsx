import { Container, Box } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Footer from "./Footer";

const PAGE_TITLES = [
    {
        path: '/',
        title: '< Corey Pierce /> Home'
    },
    {
        path: '/projects',
        title: '< Corey Pierce /> Projects'
    },
    {
        path: '/experiences',
        title: '< Corey Pierce /> Experiences'
    },
    {
        path: '/resume',
        title: '< Corey Pierce /> Resume'
    },
];


const updatePageTitle = (pathname) => {
    const match = PAGE_TITLES.find(
        (title) => title.path === pathname
    );

    if (match) {
        document.title = match.title;
    }
};


const Page = ({ children }) => {
    const currentLocation = useLocation();

    useEffect(() => {
        updatePageTitle(currentLocation.pathname);
    }, [currentLocation.pathname]);

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'black',
                color: 'white',
            }}
        >
            <Box
                sx={{
                    flex: 1,
                }}
            >
                {children}
            </Box>
            <Footer />
        </Container>
    )
};

export default Page;