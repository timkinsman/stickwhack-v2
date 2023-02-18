import { createStyles } from 'petald';
import { HomeProps, HomeStyleProps } from './Home.types';

type RuleNames = keyof HomeStyleProps;

export const useStyles = createStyles<RuleNames, HomeProps>({
  absolute: {
    position: 'absolute',
    bottom: 0,
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
    display: 'flex',
  },
  images: {
    maxWidth: '900px',
    width: '100%',
  },
  image: {
    '&:hover': {
      transform: 'scale(1.015)',
      cursor: 'pointer',
    },
  },
});
