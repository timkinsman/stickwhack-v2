import { createStyles } from 'petald';
import { HomeProps, HomeStyleProps } from './Home.types';

type RuleNames = keyof HomeStyleProps;

export const useStyles = createStyles<RuleNames, HomeProps>({
  absolute: {
    position: 'absolute',
    bottom: 0,
    top: -64,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    width: 'fit-content',
    alignSelf: 'flex-end',
    position: 'relative',
    transform: 'translateX(-42px)',
  },
  star: {
    position: 'absolute',
    bottom: '-104px',
    left: '-180px',
    display: 'flex',
  },
  images: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '1rem',
    maxWidth: '900px',
    width: '100%',
  },
});
