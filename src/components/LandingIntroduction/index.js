import React from 'react';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

import { Box, Typography } from '@mui/material';

import { motion } from 'framer-motion';

export default function LandingIntroduction({ word, index, wordLengthArray }) {
    const { height } = useWindowDimensions();
    const letters = word.split('');

    const previousLetters = wordLengthArray
        .filter((wordLength, wordLengthIndex) => (wordLengthIndex < index) && wordLength)
        .reduce((previousValue, value) => value + previousValue, 0);

    return(
        <Box sx={{ display: 'inline-block' }}>
                {letters.map((letter, index2) => (
                    <React.Fragment key={index2}>
                        <Typography
                            component={motion.p}
                            fontSize={ (height < 730) ? '34px' : '38px' } 
                            sx={{
                                color: 'white',
                                textShadow: '0 4px 4px #00000025',
                                display: 'inline-block'
                            }}
                            initial={{ opacity: 0, display: 'none' }}
                            animate={{ opacity: 1, display: 'inline-block' }}
                            transition={{ duration: .08, delay: (index2*.10) + (previousLetters/10) }}
                        >
                            {letter}
                        </Typography>
                    </React.Fragment>
                ))}
                <Typography
                    component={motion.p}
                    fontSize={ (height < 730) ? '34px' : '38px' } 
                    sx={{
                        color: 'white',
                        textShadow: '0 4px 4px #00000025',
                        display: 'inline-block'
                    }}
                    initial={{ display: 'none' }}
                    animate={{ display: 'inline-block' }}
                    transition={{ delay: (index*.15) + (previousLetters/13) }}
                >
                    {'\u00A0'}
                </Typography>
        </Box>
    );
}