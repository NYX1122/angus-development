import React, { useState, useEffect } from 'react';

import { useSpring, animated } from 'react-spring';

export default function WhiteCircle({ number }) {
  const positionNumber = parseInt(number);
  const circumference = 376.99
  const duration = 4000;
  let delay;
  switch (positionNumber) {
    case 1:
      delay = duration * 0;
      break;
    case 2:
      delay = duration;
      break;
    case 3:
      delay = duration * 2;
      break;
    case 4:
      delay = duration * 3;
      break;
    case 5:
      delay = duration * 4;
      break;
    case 6:
      delay = duration * 5;
      break;
  }

  const styles = useSpring({
    from: { x: 39 },
    to: { x: 198 },
    config: { duration: duration },
    delay: delay,
    loop: { delay: () => {
      switch (positionNumber) {
        case 1:
          if ( delay === 0 ) {
            return delay = duration * 10;
          } else {
            return delay = 0;
          }
        case 2:
          if ( delay === duration || delay === (duration * 2) ) {
            return delay = duration * 8;
          } else {
            return delay = duration * 2;
          }
        case 3:
          if ( delay === (duration * 2) || delay === (duration * 4) ) {
            return delay = duration * 6;
          } else {
            return delay = duration * 4;
          }
        case 4:
          if ( delay === (duration * 3) || delay === (duration * 6) ) {
            return delay = duration * 4;
          } else {
            return delay = duration * 6;
          }
        case 5:
          if ( delay === ( duration * 4 ) || delay === ( duration * 8 ) ) {
            return delay = duration * 2;
          } else {
            return delay = duration * 8;
          }
        case 6:
          if ( delay === ( duration * 5 ) || delay === ( duration * 10 ) ) {
            return delay = 0;
          } else {
            return delay = (duration * 10);
          }
      }
    }, reverse: true },
  })

  let phase = 1;
  const { x } = useSpring({
    from: { x: .119 },
    to: { x: .5 },
    config: { duration: 1900 },
    delay: delay,
    loop: () => {
      if (phase === 1) {
        phase = 2;
      } else if (phase === 2) {
        phase = 3;
      } else if (phase === 3) {
        phase = 4;
      }
      if( phase < 4 ) {
        return {
          from: { x: ( phase === 1 ) ? .119 : .5},
          to: { x: ( phase === 1 ) ? .5 : ( phase === 2 ) ? 1 : .12 },
          config: { duration: ( phase === 1 ) ? 1900 : ( phase === 2 ) ? 100 : 2000},
        }
      } else {
        return {
          to: { x: 0 },
          config: { duration: 0 }
        }
      }
    }
  })

  const rotateProps = useSpring({
    from: { rotate: 0, x: 0, y: 0 },
    to: { rotate: 180, x: 120, y: 120 },
    loop: { reverse: true },
    delay: 2000,
    config: { duration: 0 }
  });

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='120'
      height='120'
      fill='none'
      viewBox='0 0 120 120'
      style={{ borderRadius: 100 }}
    >
      <defs>
        <clipPath id='clip'>
          <circle cx='60' cy='60' r='39' fill='none'></circle>
        </clipPath>
        <mask id='mask'>
          <circle cx='60' cy='60' r='39' fill='none'></circle>
        </mask>
      </defs>
      <circle
        cx='60'
        cy='60'
        r='39' 
        fill='#fff'
        // strokeWidth='10'
        // stroke='#FF8271'
        // strokeLinecap='round'
        // strokeLinejoin='round'
        style={{ filter: 'drop-shadow(0px 0px 13px white)' }}>
      </circle>
      <animated.circle
        cx='60'
        cy='60'
        r='60'
        strokeWidth='42.5'
        stroke='#FF8271'
        strokeLinecap='butt'
        strokeDashoffset={x.to(x => `${((circumference * x)/2)+(circumference/2)}`)}
        strokeDasharray={x.to(x => `${circumference * x} ${circumference * (1 - x)}`)}
        mask='url(#clip)'
        style={rotateProps}
        >
      </animated.circle>
      <svg      
        width='120'
        height='120'
        fill='none'
        viewBox='0 0 120 120'
        clipPath='url(#clip)'
      >
        <animated.circle style={styles} cx='-60' cy='60' r='39' fill='#FF9789'/>
      </svg>
    </svg>
  );
}