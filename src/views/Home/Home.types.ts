import { CSSProperties } from 'react';

export type HomeStyleProps = {
  container?: CSSProperties;
  divider?: CSSProperties;
  star?: CSSProperties;
  icon?: CSSProperties;
};

export type HomeProps = {
  style?: CSSProperties & HomeStyleProps;
};
