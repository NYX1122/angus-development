import React, { useState } from 'react';

import LandingIntroduction from '../LandingIntroduction';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

import WhiteDiamond from '../../icons/WhiteDiamond';
import Arrow from '../../icons/Arrow';

import { Box, Typography } from '@mui/material';

export default function Landing() {
    const [isPaused, setIsPaused] = useState(false);
    const { height } = useWindowDimensions();
    const landingText = 'A small business, empowering other small businesses with the versatility of the internet.';
    const landingWords = landingText.split(' ');

    return(
        <Box>
            <Box marginY={ (height < 730) ? '10px' : '18px' } sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <WhiteDiamond></WhiteDiamond>
                <WhiteDiamond></WhiteDiamond>
                <WhiteDiamond></WhiteDiamond>
            </Box>
            <Box sx={{ width: '91%', marginX: '5%', paddingLeft: '2%' }}>
                {landingWords.map((word, index) => (
                    <Box key={index} sx={{ display: 'inline-block' }}>
                        <LandingIntroduction word={word} isPaused={isPaused} setIsPaused={setIsPaused}></LandingIntroduction>
                        <Box sx={{ display: 'inline-block' }}>{'\u00A0'}{'\u00A0'}</Box>
                    </Box>
                ))}
            </Box>
            <Box marginY={ (height < 730) ? '10px' : '18px' } sx={{ display: 'flex', justifyContent: 'space-around' }}>                
                <WhiteDiamond></WhiteDiamond>
                <WhiteDiamond></WhiteDiamond>
                <WhiteDiamond></WhiteDiamond>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{ width: '100%', height: '2px', backgroundColor: 'white' }}></Box>
                <Typography fontSize={ (height < 730) ? '34px' : '38px' } height={ (height < 730) ? '45px' : '50px' } sx={{
                    color: 'white',
                    fontWeight: 'light',
                }}>PROJECTS</Typography>
                <Box sx={{ width: '100%', height: '2px', backgroundColor: 'white' }}></Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around'
            }}>
                <Arrow></Arrow>
                <Arrow></Arrow>
                <Arrow></Arrow>
            </Box>
        </Box>
    )
}