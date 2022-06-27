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
      <title>DE</title>
      <desc>Created with sketchtool.</desc>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
          <stop stopColor="#FFFFFF" offset="0%"></stop>
          <stop stopColor="#F0F0F0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2">
          <stop stopColor="#262626" offset="0%"></stop>
          <stop stopColor="#0D0D0D" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-3">
          <stop stopColor="#F01515" offset="0%"></stop>
          <stop stopColor="#DE0000" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-4">
          <stop stopColor="#FFD521" offset="0%"></stop>
          <stop stopColor="#FFCF00" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="DE">
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
            height="5"
          ></rect>
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-3)"
            x="0"
            y="5"
            width="21"
            height="5"
          ></rect>
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-4)"
            x="0"
            y="10"
            width="21"
            height="5"
          ></rect>
        </g>
      </g>
    </svg>
  )
}

export default ESFlag
