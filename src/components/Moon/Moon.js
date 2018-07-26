import React from 'react'

// https://upload.wikimedia.org/wikipedia/commons/6/63/Astronomical_symbol_for_the_moon.svg

export const Moon = ({size}) => {
  // <?xml version="1.0" encoding="iso-8859-1"?>
  // <!-- Generator: Adobe Illustrator 12.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 51448)  -->
  // <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [
  // ]>
  return (

    <svg
      version='1.1'
      id='moon-layer'
      xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
      xmlSpace='preserve'
      width={size}
      height={size}
      viewBox='-25 -25 350 350'
    >
      <path
        paintOrder={'stroke'}
        stroke={'#ffe682'}
        strokeLinejoin={'round'}
        strokeWidth={'24'}
        strokeOpacity={'.5'}
        id={'moon'}
        fill={'#ffdc2f'}
        d={'M180.9,257.8c-77.9,0-141.1-63.3-141.1-141.3c0-48.4,24.2-91,61.2-116.5C42.1,21.6,0,78.5,0,145.4 C0,230.8,68.8,300,153.6,300c68.6,0,126.7-45.3,146.4-107.7C275,231.7,231,257.8,180.9,257.8z'}
      />
    </svg>

  )
}
