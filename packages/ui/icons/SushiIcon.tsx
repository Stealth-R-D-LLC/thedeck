import React from 'react'

export const SushiIcon = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="28"
      height="28"
      className="header__logo-svg"
      {...props}
    >
      <defs>
        <path id="a" d="M36 36H0V0h36z" />
      </defs>
      <g className="icon" transform="scale(.77778)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          fill="#060606"
          d="M36 32.887A3.122 3.122 0 0 1 32.887 36H3.113A3.122 3.122 0 0 1 0 32.887V3.114A3.123 3.123 0 0 1 3.113 0h29.774A3.123 3.123 0 0 1 36 3.114Z"
          mask="url(#b)"
        />
        <path
          fill="#fff"
          d="m18.757 8.346 7.314 4.877-2.285 4.063zm7.314 14.432-7.314 4.877 5.03-8.941zm-16.143 0 2.286-4.064 5.03 8.94zm0-9.555 7.315-4.877-5.029 8.94zM18 27.573 12.615 18 18 8.428 23.384 18ZM18 7l-9 6 2.812 5L9 23l9 6 9-6-2.813-5L27 13Z"
        />
      </g>
    </svg>
  )
}
