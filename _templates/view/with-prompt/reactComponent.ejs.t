---
to: src/views/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.tsx
---
import React from 'react';
import { Box } from 'petald';
import { useStyles } from './<%= h.changeCase.pascalCase(name)  %>.styles';
import { <%= h.changeCase.pascalCase(name)  %>Props } from './<%= h.changeCase.pascalCase(name)  %>.types';

export const <%= h.changeCase.pascalCase(name)  %> = ({ className = '', style = {} }: <%= h.changeCase.pascalCase(name)  %>Props): JSX.Element => {
  const classes = useStyles({ style });

  return <Box className={`${classes.root} ${className}`}>{/* component */}</Box>;
};

<%= h.changeCase.pascalCase(name)  %>.displayName = '<%= h.changeCase.pascalCase(name)  %>';