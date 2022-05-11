import React from 'react';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

import { motion } from 'framer-motion';

import { Box } from '@mui/material';

export default function Arrow({ order }) {
    const { height } = useWindowDimensions();
    
    const lineHeight = () => {
        if(height < 850 && height > 730) {
            return 200 - (850 - height);
        } else if (height < 730) {
            return 160 - (730 - height);
        } else {
            return 300
        }
    }

    const arrowHeight = lineHeight() - 34;

    return (
        <Box sx={{ position: 'relative' }}>
            <Box>
                <motion.svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='61'
                    height={`${lineHeight()}px`}
                    fill='none'
                    viewBox='0 0 61 182'
                    preserveAspectRatio='none'
                >
                    <motion.path 
                        stroke='#fff'
                        strokeWidth='3'
                        d='M30.499 180 L30.499 0'
                        vectorEffect='non-scaling-stroke'
                        strokeLinecap='round'
                        strokeDasharray={`${lineHeight()}px`}
                        initial={{ strokeDashoffset: lineHeight(), rotateZ: 180 }} 
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 3, ease: 'easeOut', delay: (order === '1') ? 0 : (order === '2') ? .4 : .8 }}
                    />
                </motion.svg>
            </Box>
            <Box top={arrowHeight} sx={{ position: 'absolute', left: 0 }}>
                <svg
                xmlns='http://www.w3.org/2000/svg'
                width='61'
                height='33'
                fill='none'
                viewBox='0 0 61 33'
                >
                <motion.path
                    stroke='#fff'
                    strokeWidth='3'
                    d='M30.939 29.939L59.224 1.655'
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeOut', delay: (order === '1') ? 2.8 : (order === '2') ? 3.2 : 3.6 }}
                />
                <motion.path
                    stroke='#fff'
                    strokeWidth='3'
                    d='M0 -1.5L40 -1.5'
                    transform='scale(-1 1) rotate(-45 22.919 50.51)'
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeOut', delay: (order === '1') ? 2.8 : (order === '2') ? 3.2 : 3.6 }}
                />
                <motion.path
                    fill='#fff'
                    d='M30.502 32.488l1.77-1.76h-3.541l1.771 1.76z'
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    transition={{ duration: .01, ease: 'easeOut', delay: (order === '1') ? 2.8 : (order === '2') ? 3.2 : 3.6 }}
                />
                </svg>
            </Box>
        </Box>
    );
}