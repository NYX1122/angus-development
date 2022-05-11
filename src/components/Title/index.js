import React, { useEffect, useState } from 'react';

import { Typography, Box } from '@mui/material';

import { motion } from 'framer-motion';

export default function Title({ letter, index }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if( index < 16 ) {
            const timeout = setTimeout(() => {
                setVisible(true);
            }, (((index*.15) - .15) * 1000));
            const timeout2 = setTimeout(() => {
                setVisible(false);
            }, (index*.15)*1000);
        }
    }, []);

    return(
        <>
            <Typography
                component={motion.p}
                sx={{
                    fontSize: {
                        xs: '30px'
                    },
                    lineHeight: {
                        xs: '30px'
                    },
                    display: 'inline'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .08, delay: (index*.15) }}
            >
                {letter}
            </Typography>
            {(visible && index < 16) ?
                <Box
                    component={motion.div}
                    sx={{
                        height: '20px',
                        width: '4px',
                        backgroundColor: 'white',
                        display: 'inline-block'
                    }}
                    initial={{ x: -10 }}
                ></Box>
            : index === 16 ?
                <Box
                    component={motion.div}
                    sx={{
                        height: '20px',
                        width: '4px',
                        backgroundColor: 'white',
                        display: 'inline-block'
                    }}
                    initial={{ x: 3, opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (index*.14), duration: .3, repeat: 17, repeatType: 'mirror' }}
                ></Box>
            : <></>
            }
        </>
    )
}