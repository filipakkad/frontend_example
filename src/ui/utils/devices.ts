import { deviceSize } from './device-size';

const deviceMinWidth = {
  mobileS: `(min-width: ${deviceSize.mobileS}px)`,
  mobileM: `(min-width: ${deviceSize.mobileM}px)`,
  mobileL: `(min-width: ${deviceSize.mobileL}px)`,
  tablet: `(min-width: ${deviceSize.tablet}px)`,
  laptop: `(min-width: ${deviceSize.laptop}px)`,
  laptopL: `(min-width: ${deviceSize.laptopL}px)`,
  desktop: `(min-width: ${deviceSize.desktop}px)`,
  desktopL: `(min-width: ${deviceSize.desktop}px)`,
};

export { deviceMinWidth };
