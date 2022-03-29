import React from 'react';

const Arrow = (props) => (
    <svg
        width={61}
        height={182}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
        stroke="#fff"
        strokeWidth={3}
        d="M30.499 180V0M30.938 178.939l28.284-28.284M30.062 178.94 1.778 150.654"
        />
        <path d="m30.5 181.488 1.772-1.76H28.73l1.77 1.76Z" fill="#fff" />
    </svg>
)
  
export default Arrow;