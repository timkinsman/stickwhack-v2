import { Box, Grid, Image, Space, Typography } from 'petald';
import { useNavigate, useParams } from 'react-router-dom';
import { workBySlug, works } from '../../utils/constants/works';
import { useMobile } from '../../utils/hooks';
import { NotFound } from '../NotFound';
import { useStyles } from './Work.styles';
import { WorkProps } from './Work.types';

export const Work = ({ className = '', style = {} }: WorkProps): JSX.Element => {
  const classes = useStyles({ style });
  const { slug } = useParams();
  const navigate = useNavigate();

  const work = workBySlug(slug);

  if (!work) {
    return <NotFound />;
  }
  const mobile = useMobile();

  return (
    <Box
      className={`${classes.root} ${className}`}
      onResize={undefined}
      onResizeCapture={undefined}
      style={{ maxWidth: '1920px', width: 'calc(100% - 40px)', padding: '0 20px' }}
    >
      <Space direction='vertical' gap={124}>
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
          <Image src={work.img} style={{ skeleton: { borderRadius: '78px' } }} />
        </Grid>

        <Space direction='vertical' gap={40}>
          <Typography variant='h3' style={{ fontFamily: 'tuppence' }}>
            more
          </Typography>
          <Grid
            gap={mobile ? 12 : 24}
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
          >
            {works
              .filter((w) => w.slug !== work.slug)
              .map((work) => (
                <Image
                  key={work?.slug}
                  className={classes.image}
                  src={work?.img}
                  onClick={() => navigate(`/work/${work?.slug}`)}
                  style={{ skeleton: { borderRadius: '78px' } }}
                />
              ))}
          </Grid>
        </Space>
      </Space>
    </Box>
  );
};

Work.displayName = 'Work';
