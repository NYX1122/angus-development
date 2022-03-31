import React, {useState} from 'react';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

import { Box, Typography } from '@mui/material';

import { useTrail, animated } from 'react-spring';

export default function LandingIntroduction({ word, isPaused, setIsPaused }) {
    const { height } = useWindowDimensions();
    const splitText = word.split('');

    const trailList = useTrail(word.length, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { precision: .5 },
        pause: isPaused
    });

    return(
        <Box sx={{ display: 'inline-block' }}>
            {trailList.map((styles, index) =>(
                <animated.div style={{ display: 'inline-block', ...styles }} key={index}>
                    <Typography fontSize={ (height < 730) ? '34px' : '38px' } sx={{
                        color: 'white',
                        fontWeight: 'light'
                    }}>
                        {splitText[index]}
                    </Typography>
                </animated.div>
            ))}
        </Box>
    );
}