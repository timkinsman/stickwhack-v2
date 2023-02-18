---
to: src/views/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.types.ts
---
import { CSSProperties } from 'react';

export type <%= h.changeCase.pascalCase(name) %>StyleProps = {
  root?: CSSProperties;
};

export type <%= h.changeCase.pascalCase(name) %>Props = {
  className?: string;
  style?: CSSProperties & <%= h.changeCase.pascalCase(name) %>StyleProps;
};
