import { Box, Grid, Image, Space, Typography } from 'petald';
import React from 'react';
import { useParams } from 'react-router-dom';
import { workBySlug } from '../../utils/constants/works';
import { NotFound } from '../NotFound';
import { useStyles } from './Work.styles';
import { WorkProps } from './Work.types';

export const Work = ({ className = '', style = {} }: WorkProps): JSX.Element => {
  const classes = useStyles({ style });
  const { slug } = useParams();

  const work = workBySlug(slug);

  if (!work) {
    return <NotFound />;
  }

  return (
    <Box
      className={`${classes.root} ${className}`}
      onResize={undefined}
      onResizeCapture={undefined}
      style={{ maxWidth: '1920px', width: 'calc(100% - 40px)', padding: '0 20px' }}
    >
      <Grid gap={24} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <Space direction='vertical' gap={40}>
          <Space direction='vertical' gap={0}>
            <Typography variant='h2'>{work.name}</Typography>
            <Typography variant='h3' style={{ fontFamily: 'tuppence' }}>
              {work.description}
            </Typography>
          </Space>
          <Typography variant='h4'>{work.brief}</Typography>
        </Space>
        <Image src={work.img} />
      </Grid>
    </Box>
  );
};

Work.displayName = 'Work';
