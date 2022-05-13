import React from 'react';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

import { Box, Typography } from '@mui/material';

import { motion } from 'framer-motion';

export default function LandingIntroduction({ word, index, wordLengthArray }) {
    const { height } = useWindowDimensions();

    const speedVariable = 6;

    const letters = word.split('');

    const previousLetters = wordLengthArray
        .filter((wordLength, wordLengthIndex) => (wordLengthIndex < index) && wordLength)
        .reduce((previousValue, value) => value + previousValue, 0);

    return(
        <Box sx={{ display: 'inline-block', height: '40px' }}>
                {letters.map((letter, index2) => (
                    <React.Fragment key={index2}>
                        <Typography
                            component={motion.p}
                            fontSize={ (height < 730) ? '34px' : '36px' } 
                            sx={{
                                color: 'white',
                                textShadow: '0 4px 4px #00000025',
                                display: 'inline-block'
                            }}
                            initial={{ opacity: 0, display: 'none' }}
                            animate={{ opacity: 1, display: 'inline-block' }}
                            transition={{ duration: .08, delay: (index2*(speedVariable/100)) + (previousLetters/((speedVariable === 10) ? 10 : ((speedVariable/-10) + 2)*10))}}
                        >
                            {letter}
                        </Typography>
                    </React.Fragment>
                ))}
                <Typography
                    component={motion.p}
                    fontSize={ (height < 730) ? '34px' : '40px' } 
                    sx={{
                        color: 'white',
                        textShadow: '0 4px 4px #00000025',
                        display: 'inline-block'
                    }}
                    initial={{ display: 'none' }}
                    animate={{ display: 'inline-block' }}
                    transition={{ delay: (index*(((speedVariable + 5) === 15) ? .15 : ((speedVariable/10)*15)/100)) + (previousLetters/((speedVariable === 10) ? 13 : ((speedVariable/-10) + 2)*13))}}
                >
                    {'\u00A0'}
                </Typography>
        </Box>
    );
}