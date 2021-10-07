export const breakpoints = ["480px", "768px", "1024px", "1440px"];

export const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
};

export const theme = {
  colors: {
    softRed: `hsl(7, 99%, 70%)`,
    yellow: `hsl(51, 100%, 49%)`,
    darkDesaturatedCyan: `hsl(167, 40%, 24%)`,
    darkBlue: `hsl(198, 62%, 26%)`,
    darkModerateCyan: `hsl(168, 34%, 41%) `,
    veryDarkDesaturatedBlue: `hsl(212, 27%, 19%)`,
    veryDarkGrayishBlue: `hsl(213, 9%, 39%)`,
    darkGrayishBlue: `hsl(232, 10%, 55%)`,
    grayishBlue: `hsl(210, 4%, 67%)`,
    white: `hsl(0,0%,100%)`,
  },
};
