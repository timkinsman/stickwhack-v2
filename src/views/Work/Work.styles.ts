import { createStyles } from 'petald';
import { WorkProps, WorkStyleProps } from './Work.types';

type RuleNames = keyof WorkStyleProps;

export const useStyles = createStyles<RuleNames, Partial<WorkProps>>({
  root: {},
});
