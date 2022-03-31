import React from 'react';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

import { Box } from '@mui/material';

export default function Arrow() {
    const { height } = useWindowDimensions();
    
    const lineHeight = () => {
        if(height < 850 && height > 730) {
            return 200 - (850 - height);
        } else if (height < 730) {
            return 160 - (730 - height);
        } else {
            return 200
        }
    }

    const arrowHeight = lineHeight() - 33;

    return (
        <Box sx={{ position: 'relative' }}>
            <Box>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='61'
                    height={`${lineHeight()}px`}
                    fill='none'
                    viewBox='0 0 61 182'
                    preserveAspectRatio='none'
                >
                    <path stroke='#fff' strokeWidth='3' d='M30.499 180L30.499 0' vectorEffect='non-scaling-stroke'></path>
                </svg>
            </Box>
            <Box top={arrowHeight} sx={{ position: 'absolute', left: 0 }}>
                <svg
                xmlns='http://www.w3.org/2000/svg'
                width='61'
                height='33'
                fill='none'
                viewBox='0 0 61 33'
                >
                <path
                    stroke='#fff'
                    strokeWidth='3'
                    d='M30.939 29.939L59.224 1.655'
                ></path>
                <path
                    stroke='#fff'
                    strokeWidth='3'
                    d='M0 -1.5L40 -1.5'
                    transform='scale(-1 1) rotate(-45 22.919 50.51)'
                ></path>
                <path fill='#fff' d='M30.502 32.488l1.77-1.76h-3.541l1.771 1.76z'></path>
                </svg>
            </Box>
        </Box>
    );
}