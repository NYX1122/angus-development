import React from 'react';

import MenuIcon from '../../icons/MenuIcon';
import Title from '../Title';

import { Box, IconButton, Grid } from '@mui/material';

import { motion, useViewportScroll, useTransform, useMotionValue } from 'framer-motion';

export default function Header() {
    const title = 'Angus Development';
    const titleLetters = title.split("");

    const { scrollYProgress } = useViewportScroll();
    const scrollRange = [0, 1];
    const colorRange = ['#FF8271', '#71FF82'];

    const backgroundColor = useTransform(scrollYProgress, scrollRange, colorRange);

    return(
        <Box
            component={motion.div}
            sx={{ position: 'fixed', width: '100vw', zIndex: 10 }}
            animate={{ scrollYProgress: 0 }}
            style={{ backgroundColor, scrollYProgress }}
        >
            <Grid container>
                <Grid item xs={8.5}>
                    <Box>
                        <Box sx={{
                            color: 'white',
                            marginTop: '6px',
                            marginLeft: '15px',
                            width: {
                                xs: '193px'
                            },
                        }}
                        >
                            {titleLetters.map((letter, index) => (
                                <Title letter={letter} index={index} key={index}></Title>
                            ))}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3.5} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Box
                        component={motion.div}
                        sx={{
                            height: {
                                xs: '66px'
                            },
                            width: {
                                xs: '2px'
                            },
                            backgroundColor: 'white'
                        }}
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                    ></Box>
                    <IconButton sx={{
                        padding: 0
                    }}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                </Grid>
            </Grid>
            <Box
                component={motion.div}
                sx={{ width: '100%', height: '2px', backgroundColor: 'white' }}
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
            ></Box>
        </Box>
    )
}