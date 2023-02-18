---
to: src/views/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.styles.ts
---
import { createStyles } from 'petald';
import { <%= h.changeCase.pascalCase(name) %>Props, <%= h.changeCase.pascalCase(name) %>StyleProps } from './<%= h.changeCase.pascalCase(name) %>.types';

type RuleNames = keyof <%= h.changeCase.pascalCase(name) %>StyleProps;

export const useStyles = createStyles<RuleNames, Partial<<%= h.changeCase.pascalCase(name) %>Props>>({
  root: ({ style }) => ({
    ...style?.root,
    ...style,
  }),
});
