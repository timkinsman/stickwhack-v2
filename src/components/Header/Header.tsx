import { Box, Divider, Space, Typography } from 'petald';
import React, { useEffect, useState } from 'react';
import { ReactComponent as IconStarFilled } from '../../assets/icons/star_filled.svg';
import { getScrollPercent } from '../../utils/helpers';
import { useStyles } from './Header.styles';
import { HeaderProps } from './Header.types';

export const Header = ({ className = '', style = {} }: HeaderProps): JSX.Element => {
  const [scrollPercent, setScrollPercent] = useState(getScrollPercent());
  const classes = useStyles({ scrollPercent });

  const onScroll = () => {
    setScrollPercent(getScrollPercent());
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Space
      className={`${classes.container} ${className}`}
      style={{
        alignItems: 'baseline',
        rowGap: 0,
        flexWrap: 'wrap',
        paddingBottom: '40px',
        overflow: 'hidden',
      }}
      gap='large'
    >
      <Typography variant='h1'>STICKWHACK</Typography>

      <Box
        onResize={undefined}
        onResizeCapture={undefined}
        style={{ width: '100%', position: 'relative' }}
      >
        <Divider className={classes.divider} />
        <Box className={classes.icon} onResize={undefined} onResizeCapture={undefined}>
          <IconStarFilled className={classes.star} />
        </Box>
      </Box>
    </Space>
  );
};

Header.displayName = 'Header';
