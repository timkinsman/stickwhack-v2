import { CSSProperties } from 'react';

export type WorkStyleProps = {
  root?: CSSProperties;
};

export type WorkProps = {
  className?: string;
  style?: CSSProperties & WorkStyleProps;
};
