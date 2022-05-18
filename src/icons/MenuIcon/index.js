import React from 'react';

import { motion } from 'framer-motion';

export default function MenuIcon() {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='60'
      height='11'
      fill='none'
      viewBox='0 0 60 11'
    >
      <motion.path
        stroke='#fff'
        strokeWidth='2'
        d='M0 1L60 1'
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      ></motion.path>
      <motion.path
        stroke='#fff'
        strokeWidth='2'
        d='M0 10L60 10'
        initial={{ pathLength: 0, rotateZ: 180 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      ></motion.path>
    </motion.svg>
  );
}
