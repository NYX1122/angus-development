import React from 'react';

import WhiteDiamond from '../../icons/WhiteDiamond';
import Arrow from '../../icons/Arrow';

import { Box, Typography } from '@mui/material';

export default function Landing() {
    return(
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginY: '18px' }}>
                <WhiteDiamond></WhiteDiamond>
                <WhiteDiamond></WhiteDiamond>
                <WhiteDiamond></WhiteDiamond>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{
                    color: 'white',
                    fontSize: '38px',
                    marginLeft: '18px',
                    fontWeight: 'light'
                }}>A small business, empowering other small businesses with the versatility of the internet.</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginY: '18px' }}>
                <WhiteDiamond></WhiteDiamond>
                <WhiteDiamond></WhiteDiamond>
                <WhiteDiamond></WhiteDiamond>
            </Box>
            <Box sx={{ width: '100%', height: '2px', backgroundColor: 'white' }}></Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography sx={{
                    height: '6vh',
                    color: 'white',
                    fontSize: '38px',
                    fontWeight: 'light'
                }}>PROJECTS</Typography>
            </Box>
            <Box sx={{ width: '100%', height: '2px', backgroundColor: 'white' }}></Box>
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