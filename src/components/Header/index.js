import React from 'react';

import { Box, Typography } from '@mui/material';

export default function Header() {
    return(
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{
                    color: 'white',
                    fontWeight: 500,
                    marginTop: '6px',
                    marginLeft: '15px',
                    fontSize: {
                        xs: '30px'
                    },
                    width: {
                        xs: '193px'
                    },
                    lineHeight: {
                        xs: '30px'
                    }
                }}
                >
                    Angus Development
                </Typography>
                <Box sx={{
                    height: {
                        xs: '66px'
                    },
                    width: {
                        xs: '2px'
                    },
                    backgroundColor: 'white'
                }}></Box>
            </Box>
            <Box sx={{
                width: '100%',
                height: '2px',
                backgroundColor: 'white'
            }}></Box>
        </Box>
    )
}