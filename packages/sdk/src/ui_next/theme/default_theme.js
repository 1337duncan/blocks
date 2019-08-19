// @flow
const colors = {
    white: 'hsl(0, 0%, 100%)',
    dark: 'hsl(0, 0%, 20%)',

    lighten1: 'hsla(0, 0%, 100%, 0.05)',
    lighten2: 'hsla(0, 0%, 100%, 0.1)',
    lighten3: 'hsla(0, 0%, 100%, 0.25)',
    lighten4: 'hsla(0, 0%, 100%, 0.5)',

    darken1: 'hsla(0, 0%, 0%, 0.05)',
    darken2: 'hsla(0, 0%, 0%, 0.1)',
    darken3: 'hsla(0, 0%, 0%, 0.25)',
    darken4: 'hsla(0, 0%, 0%, 0.5)',

    blueBright: 'rgb(45, 127, 249)',
    blue: 'rgb(18, 131, 218)',
    blueDark1: 'rgb(39, 80, 174)',
    blueLight1: 'rgb(156, 199, 255)',
    blueLight2: 'rgb(207, 223, 255)',

    cyanBright: 'rgb(24, 191, 255)',
    cyan: 'rgb(1, 169, 219)',
    cyanDark1: 'rgb(11, 118, 183)',
    cyanLight1: 'rgb(119, 209, 243)',
    cyanLight2: 'rgb(208, 240, 253)',

    grayBright: 'rgb(102, 102, 102)',
    gray: 'rgb(102, 102, 102)',
    grayDark1: 'rgb(68, 68, 68)',
    grayLight1: 'rgb(204, 204, 204)',
    grayLight2: 'rgb(238, 238, 238)',

    greenBright: 'rgb(32, 201, 51)',
    green: 'rgb(17, 175, 34)',
    greenDark1: 'rgb(51, 138, 23)',
    greenLight1: 'rgb(147, 224, 136)',
    greenLight2: 'rgb(209, 247, 196)',

    orangeBright: 'rgb(255, 111, 44)',
    orange: 'rgb(247, 101, 59)',
    orangeDark1: 'rgb(215, 77, 38)',
    orangeLight1: 'rgb(255, 169, 129)',
    orangeLight2: 'rgb(254, 226, 213)',

    pinkBright: 'rgb(255, 8, 194)',
    pink: 'rgb(233, 41, 186)',
    pinkDark1: 'rgb(178, 21, 139)',
    pinkLight1: 'rgb(249, 157, 226)',
    pinkLight2: 'rgb(255, 218, 246)',

    purpleBright: 'rgb(139, 70, 255)',
    purple: 'rgb(124, 57, 237)',
    purpleDark1: 'rgb(107, 28, 176)',
    purpleLight1: 'rgb(205, 176, 255)',
    purpleLight2: 'rgb(237, 226, 254)',

    redBright: 'rgb(248, 43, 96)',
    red: 'rgb(229, 46, 77)',
    redDark1: 'rgb(186, 30, 69)',
    redLight1: 'rgb(255, 158, 183)',
    redLight2: 'rgb(255, 220, 229)',

    tealBright: 'rgb(32, 217, 210)',
    teal: 'rgb(2, 170, 164)',
    tealDark1: 'rgb(6, 160, 155)',
    tealLight1: 'rgb(114, 221, 195)',
    tealLight2: 'rgb(194, 245, 233)',

    yellowBright: 'rgb(252, 180, 0)',
    yellow: 'rgb(224, 141, 0)',
    yellowDark1: 'rgb(184, 117, 3)',
    yellowLight1: 'rgb(255, 214, 110)',
    yellowLight2: 'rgb(255, 234, 182)',
};

const breakpoints = ['480px', '640px', '832px', '1152px'];

const borderWidths = {
    default: '1px',
    thick: '2px',
};

const borders = {
    default: `1px solid ${colors.darken2}`,
    thick: `2px solid ${colors.darken2}`,
};

const fontFamilies = {
    default:
        "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    monospace: ' Menlo, Courier, monospace',
};

const fontSizes = [];
const textSizes = [];
const headingSizes = [];
const fontWeights = {};
const lineHeights = {};

const opacities = {
    normal: 1,
    quiet: 0.75,
    quieter: 0.5,
    quietest: 0.25,
    invisible: 0,
};

const radii = {
    default: 3,
    big: 6,
    circle: 9999,
};

const space = [0, 4, 8, 16, 32, 64, 128];

export default {
    colors,
    breakpoints,
    borderWidths,
    borders,
    fontFamilies,
    fontSizes,
    textSizes,
    headingSizes,
    fontWeights,
    lineHeights,
    opacities,
    radii,
    space,
};
