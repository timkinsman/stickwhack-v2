import { CSSProperties } from 'react';

export type HeaderStyleProps = {
  root?: CSSProperties;
};

export type HeaderProps = {
  className?: string;
  style?: CSSProperties & HeaderStyleProps;
};
