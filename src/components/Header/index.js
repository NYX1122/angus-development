import React from 'react';

import MenuIcon from '../../icons/MenuIcon';

import { Box, Typography, IconButton, Grid } from '@mui/material';

export default function Header() {
    return(
        <Box>
            <Grid container>
                <Grid item xs={8.5}>
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
                </Grid>
                <Grid item xs={3.5} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Box sx={{
                        height: {
                            xs: '66px'
                        },
                        width: {
                            xs: '2px'
                        },
                        backgroundColor: 'white'
                    }}></Box>
                    <IconButton sx={{
                        padding: 0
                    }}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                </Grid>
            </Grid>
            <Box sx={{
                width: '100%',
                height: '2px',
                backgroundColor: 'white'
            }}></Box>
        </Box>
    )
}