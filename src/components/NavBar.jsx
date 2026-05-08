import { Box, Typography } from "@mui/material"
import { useNavigate, useLocation } from "react-router";
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmailIcon from '@mui/icons-material/Email';
import Drawer from '@mui/material/Drawer';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useState, useEffect } from 'react';

const NAVBAR_LINKS = [
    {
        key: 'home-navbar-link',
        path: '/',
        text: 'Home',
        Icon: HomeIcon,
    },
    {
        key: 'projects-navbar-link',
        path: '/projects',
        text: 'Projects',
        Icon: GridViewIcon,
    },
    {
        key: 'experiences-navbar-link',
        path: '/experiences',
        text: 'Experiences',
        Icon: TimelineIcon,
    },
    {
        key: 'contact-navbar-link',
        path: '/contact',
        text: 'Contact',
        Icon: EmailIcon,
    },
];

const NavBarLinks = ({
    navigator,
    location
}) => {

    return (
        NAVBAR_LINKS.map((link) => {

            const isActive = location.pathname === link.path;

            return (
                <Typography
                    key={link.key}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1,
                        fontSize: '1.25rem',
                        width: 'fit-content',
                        color: isActive ? 'blue' : 'white',
                        transition: 'color .25s ease-in-out',
                        '&:hover': {
                            cursor: 'pointer',
                            color: 'blue'
                        }
                    }}
                    onClick={() => { navigator(link.path) }}
                >
                    {<link.Icon fontSize={'large'} />}
                    {link.text}
                </Typography>
            );
        })
    );
};

const NavBar = () => {

    const navigate = useNavigate();
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setToggleMobileMenu(false);
    }, [location.pathname]);

    return (
        <Box
            sx={{
                px: 3,
                py: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid white',
                color: 'white',
                bgcolor: 'black',
                '@media (max-width: 867px)': {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingBottom: 2,
                },
                '@media (max-width: 548px)': {
                    py: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                },
            }}
        >
            <Typography
                sx={{
                    userSelect: 'none',
                    fontSize: '2rem',
                    '&:hover': {
                        cursor: 'pointer',
                    }
                }}
                onClick={() => { navigate('/') }}
            >
                &lt; Corey Pierce / &gt;
            </Typography>
            <Box
                sx={{
                    paddingRight: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    '@media (max-width: 548px)': {
                        display: 'none',
                    },
                }}
            >
                <NavBarLinks
                    navigator={navigate}
                    location={location}
                />
            </Box>
            <KeyboardDoubleArrowLeftIcon
                onClick={() => { setToggleMobileMenu(!toggleMobileMenu) }}
                sx={{
                    color: 'blue',
                    fontSize: '2.25rem',
                    display: 'none',
                    transition: "transform 0.3s ease",
                    transform: toggleMobileMenu ? "rotate(-90deg)" : "rotate(0deg)",
                    '&:hover': {
                        cursor: 'pointer',
                    },
                    '@media (max-width: 548px)': {
                        display: 'block',
                    },
                }}
            />
            <Drawer
                anchor={'top'}
                open={toggleMobileMenu}
                onClose={() => setToggleMobileMenu(false)}
                transitionDuration={550}
                sx={{
                    '& .MuiDrawer-paper': {
                        bgcolor: 'rgba(0, 0, 0, 0.51)',
                        color: 'white'
                    }
                }}
            >
                <Box
                    sx={{
                        my: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1.5,
                    }}
                >
                    <NavBarLinks
                        navigator={navigate}
                        location={location}
                    />
                </Box>
            </Drawer>
        </Box>
    );
};

export default NavBar;