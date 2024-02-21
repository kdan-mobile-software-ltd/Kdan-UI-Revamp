import { css } from 'styled-components';

export const h1FontStyle = css`
  line-height: 56px;
  font-size: 70px;
`;
export const h2FontStyle = css`
  line-height: 48px;
  font-size: 62px;
`;
export const h3FontStyle = css`
  font-size: 36px;
`;
export const h4FontStyle = css`
  font-size: 32px;
`;
export const h5FontStyle = css`
  font-size: 28px;
`;
export const h6FontStyle = css`
  font-size: 26px;
`;
export const h7FontStyle = css`
  font-size: 22px;
`;
export const h8FontStyle = css`
  font-size: 18px;
`;
export const h9FontStyle = css`
  font-size: 16px;
`;

export const body1FontStyle = css`
  font-size: 24px;
`;
export const body2FontStyle = css`
  font-size: 20px;
`;
export const body3FontStyle = css`
  font-size: 18px;
  line-height: 28px;
`;
export const body4FontStyle = css`
  font-size: 16px;
  line-height: 24px;
`;
export const body5FontStyle = css`
  font-size: 14px;
  line-height: 20px;
`;
export const caption1FontStyle = css`
  font-size: 12px;
`;

export const button1FontStyle = css`
  font-size: 22px;
`;
export const button2FontStyle = css`
  font-size: 20px;
`;
export const button3FontStyle = css`
  font-size: 16px;
`;
export const button4FontStyle = css`
  font-size: 14px;
`;

export const FONT_SIZE = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  h7: 'h7',
  h8: 'h8',
  h9: 'h9',
  body1: 'body1',
  body2: 'body2',
  body3: 'body3',
  body4: 'body4',
  body5: 'body5',
  caption1: 'caption1',
} as const;

export type FontSize = keyof typeof FONT_SIZE;