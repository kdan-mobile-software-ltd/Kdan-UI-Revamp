import React from 'react';
import { StyledHyperlink } from './styled';
import { ComponentProps } from './types';

export const Hyperlink: React.FC<ComponentProps> = ({
  variant,
  children,
  href,
  color = 'hyperlink',
  fontSize = { default: 'body3', tablet: 'body5' },
  padding,
  margin,
  textAlign,
  customCss,
  ...htmlProps
}) => (
  <StyledHyperlink
    variant={variant}
    {...{
      color, fontSize, padding, margin, textAlign, customCss, ...htmlProps,
    }}
  >
    {children}
    {variant === 'arrow' && ' →'}
  </StyledHyperlink>
);
