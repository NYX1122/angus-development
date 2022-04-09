import React, { useEffect, useRef } from 'react';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

import { Box, Typography } from '@mui/material';

import { useTrail, animated } from 'react-spring';

export default function LandingIntroduction({ word, isPaused, setIsPaused }) {
    const i = useRef(1);
    const { height } = useWindowDimensions();
    const splitText = word.split('');

    const changeI = () => {
        if (i.current === 1) {
            i.current = 2;
        } else if (i.current === 2) {
            i.current = 1;
        }
    }

    const trailList = useTrail(word.length, {
        from: { opacity: 0, y: (i.current % 2 === 0) ? -15 : 15 },
        to: { opacity: 1, y: 0 },
        config: { precision: .5 },
        onRest: changeI()
    });

    return(
        <Box sx={{ display: 'inline-block' }}>
            {trailList.map((styles, index) =>(
                <animated.div style={{ display: 'inline-block', ...styles }} key={index}>
                    <Typography fontSize={ (height < 730) ? '34px' : '38px' } sx={{
                        color: 'white',
                        fontWeight: 100,
                        textShadow: 'black 0 1px 8px'
                    }}>
                        {splitText[index]}
                    </Typography>
                </animated.div>
            ))}
        </Box>
    );
}