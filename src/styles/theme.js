const theme = {
  black: '#000',
  darkGray: '#666',
  gray: '#a2a2a2',
  mediumGray: '#e5e5e5',
  lightGray: '#f8f8f8',
  white: '#fff',
  blue: '#004ec3',

  fontExtraLarge: '34px',
  fontLarge: '24px',
  fontMedium: '18px',
  fontSemiMedium: '16px',
  fontRegular: '14px',
  fontSmall: '13px',
  fontMicro: '11px',

  weightBold: '700',
  weightSemiBold: '500',
  weightRegular: '400',
  weightThin: '300',

  borderRadius4: '4px',
  borderRadius12: '12px',

  borderGray: '1px solid #e8e8e8',
  borderBlack: '1px solid #000',

  marginCenter: '0 auto',

  flex: (align = 'center', justify = 'center', direction = 'row') => `
      display: flex;
      flex-direction: ${direction};
      align-items: ${align};
      justify-content:${justify};
      `,

  positionFixed: `
      position: fixed;
      top: 0;
      left: 0;
      z-index:999;
    `,
};

export default theme;
