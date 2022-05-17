import React from 'react';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

import { motion } from 'framer-motion';

import { Box } from '@mui/material';

export default function Projects() {
    const { height } = useWindowDimensions();

    return (
        <Box 
            component={motion.div}
            sx={{ height: height + 1, width: '100vw', backgroundColor: '#71FF82', position: 'absolute', top: height - 1 }}
            
        >
        </Box>
    );
}