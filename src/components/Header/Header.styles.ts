import { createStyles } from 'petald';
import { COLORS } from '../../AppTheme';

export const useStyles = createStyles({
  container: {
    width: '100%',
    zIndex: 99999,
  },
  divider: {
    borderColor: COLORS.STICKWHACK_BLUE,
    borderTop: '2px solid',
  },
  star: ({ scrollPercent }: { scrollPercent: number }) => ({
    color: COLORS.STICKWHACK_BLUE,
    transform: `rotate(${scrollPercent * 2.95}deg)`,
  }),
  icon: ({ scrollPercent }: { scrollPercent: number }) => ({
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: `${scrollPercent}%`,
  }),
});
