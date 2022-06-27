import { IconProps } from '@icons'

const ESFlag: React.FC<IconProps> = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  if (filled) {
    return <>filled</>
  }
  return (
    <svg
      width="21px"
      height="15px"
      viewBox="0 0 21 15"
      xmlns="http://www.w3.org/2000/svg"
      // {...props}
    >
      <title>ES</title>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
          <stop stopColor="#FFFFFF" offset="0%"></stop>
          <stop stopColor="#F0F0F0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2">
          <stop stopColor="#DD172C" offset="0%"></stop>
          <stop stopColor="#C60B1F" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-3">
          <stop stopColor="#FFD133" offset="0%"></stop>
          <stop stopColor="#FFC500" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="ES">
          <rect
            id="FlagBackground"
            fill="url(#linearGradient-1)"
            x="0"
            y="0"
            width="21"
            height="15"
          ></rect>
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-2)"
            x="0"
            y="0"
            width="21"
            height="4"
          ></rect>
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-2)"
            x="0"
            y="11"
            width="21"
            height="4"
          ></rect>
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-3)"
            x="0"
            y="4"
            width="21"
            height="7"
          ></rect>
          <polygon
            id="Rectangle-139-Copy"
            fill="#FFEDB1"
            points="5.5 7 6.5 7 6.5 7.5 5.5 7.5"
          ></polygon>
          <path
            d="M4.9150265,8.4595207 C4.93965065,8.7550105 5.2060923,9 5.5,9 C5.79425164,9 6.06044023,8.75391994 6.0849735,8.4595207 L6.20660023,7 L4.79339977,7 L4.9150265,8.4595207 Z M4.29128242,6.99538898 C4.26848277,6.7217932 4.48071289,6.5 4.7559123,6.5 L6.2440877,6.5 C6.52349535,6.5 6.73202062,6.7157526 6.70871758,6.99538898 L6.58324638,8.50104344 C6.53727067,9.05275191 6.05613518,9.5 5.5,9.5 C4.94771525,9.5 4.46311164,9.05733967 4.41675362,8.50104344 L4.29128242,6.99538898 Z"
            id="Rectangle-137"
            fill="#A41517"
            fillRule="nonzero"
          ></path>
          <polygon
            id="Rectangle-139"
            fill="#A41517"
            points="4.5 7.5 6.5 7.5 6.5 8 6 8 5.5 9 5 8 4.5 8"
          ></polygon>
          <rect id="Rectangle-135" fill="#A41517" x="3" y="6" width="1" height="3.5"></rect>
          <rect id="Rectangle-135-Copy" fill="#A41517" x="7" y="6" width="1" height="3.5"></rect>
          <path
            d="M4.5,5.5 C4.5,5.22385763 4.71403503,5 5.00468445,5 L5.99531555,5 C6.27404508,5 6.5,5.23193359 6.5,5.5 L6.5,5.74765778 C6.5,5.88702254 6.39247131,6 6.25476074,6 L4.74523926,6 C4.60979736,6 4.5,5.89298248 4.5,5.74765778 L4.5,5.5 Z"
            id="Rectangle-138"
            fill="#A41517"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default ESFlag
