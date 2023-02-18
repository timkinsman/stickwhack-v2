import { Box, Grid, Image, Space, Typography } from 'petald';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconStar } from '../../assets/icons/star.svg';
import { gridWorks, showcaseWorks } from '../../utils/constants/works';
import { useMobile } from '../../utils/hooks';
import { useStyles } from './Home.styles';

export const Home = () => {
  const classes = useStyles();
  const [englese, setEnglese] = useState(false);
  const navigate = useNavigate();

  const mobile = useMobile();

  return (
    <Space
      direction='vertical'
      gap={mobile ? 100 : 200}
      style={{ maxWidth: '1920px', width: 'calc(100% - 40px)', padding: '0 20px' }}
    >
      <Box
        onClick={() => setEnglese(!englese)}
        onResize={undefined}
        onResizeCapture={undefined}
        className={classes.message}
      >
        <Typography variant='h1' style={{ fontFamily: 'tuppence' }}>
          {englese ? 'this is' : 'ceci n`est'}
        </Typography>

        <Space direction='vertical' style={{ marginTop: '-12px', transform: 'translateX(40px)' }}>
          <Typography variant='h1' style={{ transform: 'translateX(12px)' }}>
            {englese ? 'NOT' : 'PAS'}
          </Typography>
          <Typography variant='h1' style={{ marginTop: mobile ? '-24px' : '-40px' }}>
            {englese ? 'STICK' : 'BÂTON'}
          </Typography>
        </Space>

        <Box
          onResize={undefined}
          onResizeCapture={undefined}
          className={classes.star}
          style={{ bottom: mobile ? '-48px' : '-104px', left: mobile ? '-140px' : '-180px' }}
        >
          <IconStar height={mobile ? 112 : undefined} />

          <Box
            className={classes.absolute}
            onResize={undefined}
            onResizeCapture={undefined}
            style={{ top: mobile ? -20 : -64 }}
          >
            <Typography variant='h1' style={{ fontFamily: 'tuppence' }}>
              {englese ? 'a' : 'un'}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Grid
        gap={mobile ? 12 : 24}
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
      >
        {showcaseWorks.map((work) => (
          <Image
            key={work?.slug}
            className={classes.image}
            src={work?.img}
            onClick={() => navigate(`/work/${work?.slug}`)}
          />
        ))}
      </Grid>

      <Space direction='vertical' gap={0}>
        <Space style={{ position: 'relative', flexWrap: 'wrap', rowGap: 0 }} gap='large'>
          <IconStar
            style={{ position: 'absolute', left: '-124px', top: mobile ? '-40px' : '-72px' }}
            height={mobile ? 112 : undefined}
          />
          <Typography variant={mobile ? 'h2' : 'h1'} style={{ zIndex: 2 }}>
            ILLUSTRATION
          </Typography>
          <Typography variant='h2' style={{ fontFamily: 'tuppence' }}>
            WORK
          </Typography>
        </Space>

        {/* Images */}
        <Grid className={classes.images} columns={2} rows={3} gap={mobile ? 12 : 24}>
          {gridWorks.map((work) => (
            <Image
              key={work?.slug}
              className={classes.image}
              src={work?.img}
              onClick={() => navigate(`/work/${work?.slug}`)}
            />
          ))}
        </Grid>
      </Space>
    </Space>
  );
};
