import { useTheme } from "./theme-provider"

const colors = {
  white: "#FFFFFF",
  green: "#71CD69",
  black: "#000000"
};

type ImageProps = {
  color?: keyof typeof colors,
  width?: number,
  height?: number,
  className?: string
}

export const LogoIcon = ({color = "black", width = 32, height = 32, className }: ImageProps) => {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 649 576" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M399.13 368.861L552.815 288L610.555 451.832" stroke={colors[color]} strokeWidth="80" strokeMiterlimit="10" />
      <path d="M530.295 343.832C511.696 422.91 454.645 491.27 372.45 520.713C243.503 566.913 101.52 499.86 55.3046 370.962C9.09851 242.056 76.1645 100.119 205.103 53.9186C285.69 25.0491 355.167 42.98 387.888 111.993C422.913 185.871 336.33 358.982 41.0506 274.077" stroke={colors[color]} strokeWidth="80" strokeMiterlimit="10" />
    </svg>
  )
}

export const LogoName = ({ color = "black", height = 32, className }: ImageProps) => {
  return (
    <svg className={className} width={height*4} height={height} viewBox="0 0 569 119" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M58.13 63.2399H8.56C9.97 76.3999 18.53 84.5799 30.28 84.5799C38.33 84.5799 44.08 81.1299 48.04 74.4899H56.34C52.51 84.5799 42.41 92.3799 30.02 92.3799C13.16 92.3699 0 78.9599 0 59.1499C0 39.3399 13.54 25.9399 30.02 25.9399C46.5 25.9399 58.64 39.6099 58.64 57.2399C58.64 59.6699 58.51 61.7099 58.13 63.2399ZM8.43 55.6999H50.21C49.44 42.9199 41.14 33.7199 30.02 33.7199C18.9 33.7199 9.83 42.5399 8.43 55.6999Z" fill={colors[color]} />
      <path d="M66.82 91.0899V27.2099H72.95L75.12 35.8999H75.76C78.57 31.5599 85.09 25.9399 94.54 25.9399C108.98 25.9399 119.96 36.9299 119.96 54.0499V91.0999H111.66V54.0499C111.66 41.2699 104.12 33.7399 93.77 33.7399C82.78 33.7399 75.12 41.2799 75.12 54.0499V91.0999H66.82V91.0899Z" fill={colors[color]} />
      <path d="M134.53 71.93V35.01H123.16V27.22H128.14C133.25 27.22 135.93 24.66 135.93 19.55V10.22H142.83V27.21H157.78V35H142.83V72.05C142.83 80.74 147.05 84.57 153.43 84.57C155.09 84.57 156.37 84.31 157.77 83.8V91.34C156.36 91.85 154.83 92.36 152.15 92.36C142.18 92.36 134.52 84.95 134.52 71.92L134.53 71.93Z" fill={colors[color]} />
      <path d="M165.32 91.0899V27.2099H171.45L173.62 35.8999H174.26C176.94 31.8099 183.72 25.9399 191.51 25.9399C193.04 25.9399 194.83 26.0699 196.11 26.4499V34.7499C194.58 34.3699 193.17 34.2399 191.77 34.2399C181.29 34.2399 173.63 41.7799 173.63 54.5499V91.0899H165.33H165.32Z" fill={colors[color]} />
      <path d="M251.69 63.2399H202.12C203.53 76.3999 212.08 84.5799 223.84 84.5799C231.89 84.5799 237.64 81.1299 241.6 74.4899H249.9C246.07 84.5799 235.97 92.3799 223.58 92.3799C206.71 92.3799 193.56 78.9599 193.56 59.1599C193.56 39.3599 207.1 25.9399 223.58 25.9399C240.06 25.9399 252.2 39.6099 252.2 57.2399C252.2 59.6699 252.07 61.7099 251.69 63.2399ZM201.99 55.6999H243.77C243 42.9199 234.7 33.7199 223.58 33.7199C212.46 33.7199 203.39 42.5399 201.99 55.6999Z" fill={colors[color]} />
      <path d="M258.97 96.0799H267.27C269.7 103.24 276.47 107.58 286.05 107.58C297.42 107.58 305.09 100.3 305.09 88.9299V78.8399H304.45C302.53 81.7799 294.99 88.9299 284.77 88.9299C269.06 88.9299 256.15 75.6399 256.15 57.4999C256.15 39.3599 269.05 25.9399 284.77 25.9399C294.99 25.9399 302.53 32.9699 304.45 35.8999H305.09L307.26 27.2099H313.39V88.9199C313.39 104.76 302.4 115.37 286.05 115.37C272.25 115.37 261.78 107.83 258.97 96.0799ZM305.09 57.4899C305.09 43.6899 295.63 33.7299 284.78 33.7299C273.93 33.7299 264.47 43.6999 264.47 57.4899C264.47 71.2799 273.8 81.1299 284.78 81.1299C295.76 81.1299 305.09 71.1699 305.09 57.4899Z" fill={colors[color]} />
      <path d="M374.85 51.23V91.09H364.37L361.82 83.81H361.18C358.62 87.13 352.62 92.63 342.27 92.63C329.62 92.63 320.55 83.94 320.55 73.34C320.55 60.44 332.82 52.26 350.57 52.26H360.92V50.09C360.92 42.3 356.19 37.57 348.91 37.57C341.63 37.57 338.31 41.91 337.54 46.13H323.49C324.64 35.27 333.46 24.92 349.04 24.92C364.62 24.92 374.85 35.52 374.85 51.24V51.23ZM360.93 66.44V62.35H350.71C339.72 62.35 334.61 66.31 334.61 72.19C334.61 77.17 338.19 80.75 345.21 80.75C354.79 80.75 360.92 74.11 360.92 66.44H360.93Z" fill={colors[color]} />
      <path d="M428.77 67.33H442.82C440.39 79.34 429.92 91.6 414.84 92.63L413.18 96.34C420.72 96.85 425.32 101.07 425.32 107.07C425.32 113.97 420.59 118.7 409.73 118.7C406.28 118.7 403.09 118.06 401.04 117.29V109.88C402.83 110.39 405 110.77 407.94 110.77C413.69 110.77 415.73 109.11 415.73 106.68C415.73 104.38 413.69 102.59 408.19 102.59C406.02 102.59 404.61 102.84 403.21 103.23L407.68 92.11C392.6 89.43 380.85 75.63 380.85 58.76C380.85 39.85 395.41 24.9 412.92 24.9C429.02 24.9 440.26 37.55 442.82 50.2H428.77C427.24 44.96 422.13 37.94 412.93 37.94C402.96 37.94 394.79 46.5 394.79 58.76C394.79 71.02 402.97 79.59 412.93 79.59C422.13 79.59 427.24 72.56 428.77 67.33Z" fill={colors[color]} />
      <path d="M498.78 51.23V91.09H488.3L485.74 83.81H485.1C482.54 87.13 476.54 92.63 466.19 92.63C453.54 92.63 444.47 83.94 444.47 73.34C444.47 60.44 456.73 52.26 474.49 52.26H484.84V50.09C484.84 42.3 480.11 37.57 472.83 37.57C465.55 37.57 462.23 41.91 461.46 46.13H447.41C448.56 35.27 457.37 24.92 472.96 24.92C488.55 24.92 498.77 35.52 498.77 51.24L498.78 51.23ZM461.73 17.12H452.66C452.66 5.62 458.15 0 465.05 0C473.23 0 475.53 8.05 480.13 8.05C482.81 8.05 484.98 5.49 484.98 0.64H494.05C494.05 12.14 488.68 17.76 481.66 17.76C473.48 17.76 471.18 9.71 466.58 9.71C464.02 9.71 461.72 12.27 461.72 17.12H461.73ZM484.85 66.44V62.35H474.63C463.64 62.35 458.53 66.31 458.53 72.19C458.53 77.17 462.11 80.75 469.13 80.75C478.71 80.75 484.84 74.11 484.84 66.44H484.85Z" fill={colors[color]} />
      <path d="M504.79 58.77C504.79 39.86 519.35 24.91 536.86 24.91C554.37 24.91 568.93 39.86 568.93 58.77C568.93 77.68 554.36 92.63 536.86 92.63C519.36 92.63 504.79 77.55 504.79 58.77ZM555 58.77C555 46.51 546.82 37.95 536.86 37.95C526.9 37.95 518.72 46.51 518.72 58.77C518.72 71.03 526.9 79.6 536.86 79.6C546.82 79.6 555 71.04 555 58.77Z" fill={colors[color]} />
    </svg>
  )
}

export const ResponsiveLogoIcon = () => {
  const { theme } = useTheme()
  if(theme==="dark"){
    return <LogoIcon color="white" />
  }else{
    return <LogoIcon color="black" />
  }
}

export const ResponsiveLogoName = ({className = "absolute inset-x-1/2 -translate-x-2/4"}:{className?:string}) => {
  const { theme } = useTheme()
  if(theme==="dark"){
    return <LogoName className={className} color="white" height={45} />
  }else{
    return <LogoName className={className} color="black" height={45} />
  }
  
}

type FullImageProps = {
  color?: string,
  height?: number,
  widthIcon?: number,
  widthName?: number,
}

export const LogoIconName = ({ color = "black", height = 32 }: ImageProps, { widthIcon = 32, widthName = 128 }: FullImageProps) => {
  return (
    <>
      <LogoIcon color={color} width={widthIcon} height={height} />
      <LogoName color={color} width={widthName} height={height} />
    </>
  )
}