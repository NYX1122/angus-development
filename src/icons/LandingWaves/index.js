import React from 'react';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

export default function LandingWaves() {
    const { height } = useWindowDimensions();

    return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100vw'
          height='210'
          fill='none'
          viewBox='0 0 375 210'
          preserveAspectRatio='none'
        >
          <path
            fill='#FF9789'
            stroke='#FF9789'
            d='M187 45.28c-72.4-80.195-154.833-33.415-187 0V210h375V25.634c-32.5 39.963-115.6 99.84-188 19.645z'
          ></path>
          <path
            fill='#FFA99D'
            stroke='#FFA99D'
            d='M187.75 79.866c-105.86 69.978-165.28 3.07-187.75 0V210h375V108.103c-27.13-32.738-102.563-84.22-187.25-28.237z'
          ></path>
          <path
            fill='#FFC7BF'
            stroke='#FFC7BF'
            d='M184.492 153.109c-72.193-47.286-153.075-19.702-184.492 0V210h375v-56.891c-33.422 19.703-118.316 47.286-190.508 0z'
          ></path>
        </svg>
      );
}