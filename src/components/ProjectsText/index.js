import React from 'react';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

import { Typography } from '@mui/material';

import { motion } from 'framer-motion';

export default function ProjectsText({ letter, index }) {
    const { height } = useWindowDimensions();

    return(
        <Typography
            component={motion.p}
            fontSize={ (height < 730) ? '36px' : '40px' } 
            height={ (height < 730) ? '45px' : '50px' } 
            sx={{
                color: 'white',
                textShadow: '0 4px 4px #00000025',
                paddingBottom: '10px',
                display: 'inline-block'
            }}
            initial={{ opacity: 0, display: 'none' }}
            animate={{ opacity: 1, display: 'inline-block' }}
            transition={{ duration: .08, delay: (index*.15) }}
        >
            {letter}
        </Typography>
    );
}