import React from 'react';

import { motion } from 'framer-motion';

export default function LandingWaves() {

    return (
      <>
      {/* first wave animation */}
        <motion.svg
          style={{ position: 'absolute' }}
          xmlns='http://www.w3.org/2000/svg'
          width='100vw'
          height='273'
          fill='none'
          viewBox='0 0 376 273'
          preserveAspectRatio='none'
          animate={{ x: '100vw' }}
          transition={{ duration: 16, ease: 'linear', repeatType: 'loop', repeat: Infinity }}
        >
          <path
            fill='#DCA175'
            d='M187.736 58.132C115.337-46.318 27.884 13.547.817 58.11L.74 272.677h375.002l.075-214.575c-32.499 52.051-115.683 104.481-188.081.03z'
          ></path>
        </motion.svg>

        <motion.svg
          style={{ position: 'absolute' }}
          xmlns='http://www.w3.org/2000/svg'
          width='100vw'
          height='273'
          fill='none'
          viewBox='0 0 376 273'
          preserveAspectRatio='none'
          initial={{ x: '-99.6vw' }}
          animate={{ x: '.4vw' }}
          transition={{ duration: 16, ease: 'linear', repeatType: 'loop', repeat: Infinity }}
        >
          <path
            fill='#DCA175'
            d='M187.736 58.132C115.337-46.318 27.884 13.547.817 58.11L.74 272.677h375.002l.075-214.575c-32.499 52.051-115.683 104.481-188.081.03z'
          ></path>
        </motion.svg>

        
        {/* second wave animation */}
        <motion.svg
          style={{ position: 'absolute', top: 273 - 237 }}
          xmlns='http://www.w3.org/2000/svg'
          width='100vw'
          height='237'
          fill='none'
          viewBox='0 0 376 237'
          preserveAspectRatio='none'
          animate={{ x: '-100vw' }}
          transition={{ duration: 12, ease: 'linear', repeatType: 'loop', repeat: Infinity }}
        >
          <path
            fill='#B8C17A'
            d='M188.216 41.061C82.366 146.34 9.453 77.71.481 65.853V236.84h374.97V65.853C342.472 23.393 272.896-43.16 188.216 41.06z'
          ></path>
        </motion.svg>

        <motion.svg
          style={{ position: 'absolute', top: 273 - 237 }}
          xmlns='http://www.w3.org/2000/svg'
          width='100vw'
          height='237'
          fill='none'
          viewBox='0 0 376 237'
          preserveAspectRatio='none'
          initial={{ x: '99.6vw' }}
          animate={{ x: '-.4vw' }}
          transition={{ duration: 12, ease: 'linear', repeatType: 'loop', repeat: Infinity }}
        >
          <path
            fill='#B8C17A'
            d='M188.216 41.061C82.366 146.34 9.453 77.71.481 65.853V236.84h374.97V65.853C342.472 23.393 272.896-43.16 188.216 41.06z'
          ></path>
        </motion.svg>


        {/* third wave animation */}
        <motion.svg
          style={{ position: 'absolute', top: 273 - 171 }}
          xmlns='http://www.w3.org/2000/svg'
          width='100vw'
          height='171'
          fill='none'
          viewBox='0 0 375 171'
          preserveAspectRatio='none'
          animate={{ x: '100vw' }}
          transition={{ duration: 8, ease: 'linear', repeatType: 'loop', repeat: Infinity }}
        >
          <path
            fill='#95E07E'
            d='M184.477 54.259C112.291-42.635 31.415 13.886 0 54.259v116.575h374.97V54.259c-33.42 40.372-118.306 96.893-190.493 0z'
          ></path>
        </motion.svg>

        <motion.svg
          style={{ position: 'absolute', top: 273 - 171 }}
          xmlns='http://www.w3.org/2000/svg'
          width='100vw'
          height='171'
          fill='none'
          viewBox='0 0 375 171'
          preserveAspectRatio='none'
          initial={{ x: '-99.8vw' }}
          animate={{ x: '.2vw' }}
          transition={{ duration: 8, ease: 'linear', repeatType: 'loop', repeat: Infinity }}
        >
          <path
            fill='#95E07E'
            d='M184.477 54.259C112.291-42.635 31.415 13.886 0 54.259v116.575h374.97V54.259c-33.42 40.372-118.306 96.893-190.493 0z'
          ></path>
        </motion.svg>


        {/* fourth wave animation */}
        <motion.svg
          style={{ position: 'absolute', top: 273 - 114 }}
          xmlns='http://www.w3.org/2000/svg'
          width='100vw'
          height='114'
          fill='none'
          viewBox='0 0 376 114'
          preserveAspectRatio='none'
          animate={{ x: '-100vw' }}
          transition={{ duration: 4, ease: 'linear', repeatType: 'loop', repeat: Infinity }}
        >
          <path
            fill='#71FF82'
            d='M191.49 35.92c72.186-64.25 153.062-26.771 184.477 0v77.301H.997V35.92c33.42 26.77 118.306 64.25 190.493 0z'
          ></path>
        </motion.svg>

        <motion.svg
          style={{ position: 'absolute', top: 273 - 114 }}
          xmlns='http://www.w3.org/2000/svg'
          width='100vw'
          height='114'
          fill='none'
          viewBox='0 0 376 114'
          preserveAspectRatio='none'
          initial={{ x: '99.6vw' }}
          animate={{ x: '-.4vw' }}
          transition={{ duration: 4, ease: 'linear', repeatType: 'loop', repeat: Infinity }}
        >
          <path
            fill='#71FF82'
            d='M191.49 35.92c72.186-64.25 153.062-26.771 184.477 0v77.301H.997V35.92c33.42 26.77 118.306 64.25 190.493 0z'
          ></path>
        </motion.svg>
      </>
    );
}