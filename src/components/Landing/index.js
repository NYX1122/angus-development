import React from 'react';

import LandingIntroduction from '../LandingIntroduction';
import ProjectsText from '../ProjectsText';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

import Arrow from '../../icons/Arrow';
import LandingWaves from '../../icons/LandingWaves';

import { Box } from '@mui/material';

import { motion } from 'framer-motion';

export default function Landing() {
    const { height } = useWindowDimensions();

    const landingIntro = 'A small business, empowering other small businesses with the functionality and versatility of the internet.';
    const landingWords = landingIntro.split(' ');
    const wordLengthArray = landingWords.map(word => {
        return word.length
    });
    const landingIntroLetterCount = landingIntro.replace(/ /g, '').length;

    const projectText = 'PROJECTS';
    const projectLetters = projectText.split('');

    return(
        <Box position='relative'>
            <Box sx={{ width: '91%', marginX: '5%', paddingLeft: '2%', paddingY: 3 }}>
                {landingWords.map((word, index) => (
                    <LandingIntroduction word={word} index={index} key={index} wordLengthArray={wordLengthArray}></LandingIntroduction>
                ))}
                <Box
                    component={motion.div}
                    sx={{
                        height: '30px',
                        width: '4px',
                        backgroundColor: 'white',
                        display: 'inline-block'
                    }}
                    initial={{ x: -5 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: .3, delay: (landingIntroLetterCount*.1029), repeat: 16, repeatType: 'mirror' }}
                ></Box> 
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box
                    component={motion.div}
                    sx={{ width: '100%', height: '2px', backgroundColor: 'white' }}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                ></Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {projectLetters.map((letter, index) => (
                        <ProjectsText letter={letter} key={index} index={index}></ProjectsText>
                    ))}
                    <Box
                        component={motion.div}
                        sx={{
                            height: '35px',
                            width: '4px',
                            backgroundColor: 'white',
                            display: 'inline-block'
                        }}
                        initial={{ opacity: 1, x: 3, y: -2 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: .3, delay: (projectText.length*.14), repeat: 16, repeatType: 'mirror' }}
                    ></Box>
                </Box>
                <Box 
                    component={motion.div}
                    sx={{ width: '100%', height: '2px', backgroundColor: 'white' }}
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                ></Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around'
            }}>
                <Arrow order='1'></Arrow>
                <Arrow order='2'></Arrow>
                <Arrow order='3'></Arrow>
            </Box>
            <Box 
                component={motion.div}
                position='absolute' 
                zIndex='-10' 
                top={height - (273*1.25)}
                initial={{ y: (height - (273*1.25)) }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
            >
                <LandingWaves></LandingWaves>
            </Box>
        </Box>
    )
}