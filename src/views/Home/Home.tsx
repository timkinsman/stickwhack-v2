import { Box, Image, Space, Typography } from 'petald';
import { useState } from 'react';
import { ReactComponent as IconStar } from '../../assets/icons/star.svg';
import debbie from '../../assets/images/DEBBIE BUSICARDS.png';
import fringe from '../../assets/images/FRINGE TSHIRTS.png';
import mask4 from '../../assets/images/Mask Group 4.png';
import mask6 from '../../assets/images/Mask Group 6.png';
import mask7 from '../../assets/images/Mask Group 7.png';
import mask8 from '../../assets/images/Mask Group 8.png';
import mask9 from '../../assets/images/Mask Group 9.png';
import btbgrain from '../../assets/images/btbgrain.png';
import { useStyles } from './Home.styles';

export const Home = () => {
  const classes = useStyles();
  const [stiiick, setStiiick] = useState(false);

  return (
    <Space
      direction='vertical'
      gap={200}
      style={{ maxWidth: '1920px', width: 'calc(100% - 40px)', padding: '0 20px' }}
    >
      <Box
        onClick={() => setStiiick(!stiiick)}
        onResize={undefined}
        onResizeCapture={undefined}
        className={classes.message}
      >
        <Typography variant='h1' style={{ fontFamily: 'tuppence' }}>
          {stiiick ? 'this is' : 'ceci n`est'}
        </Typography>

        <Space direction='vertical' style={{ marginTop: '-12px', transform: 'translateX(40px)' }}>
          <Typography variant='h1' style={{ transform: 'translateX(12px)' }}>
            {stiiick ? 'NOT' : 'PAS'}
          </Typography>
          <Typography variant='h1' style={{ marginTop: '-40px' }}>
            {stiiick ? 'STICK' : 'BÂTON'}
          </Typography>
        </Space>

        <Box onResize={undefined} onResizeCapture={undefined} className={classes.star}>
          <IconStar />

          <Box className={classes.absolute} onResize={undefined} onResizeCapture={undefined}>
            <Typography variant='h1' style={{ fontFamily: 'tuppence' }}>
              {stiiick ? 'a' : 'un'}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1rem',
        }}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <Image src={fringe} />
        <Image src={debbie} />
      </Box>

      <Space direction='vertical' gap={0}>
        <Space style={{ position: 'relative', flexWrap: 'wrap', rowGap: 0 }} gap='large'>
          <IconStar style={{ position: 'absolute', left: '-124px', top: '-72px' }} />
          <Typography variant='h1' style={{ zIndex: 2 }}>
            ILLUSTRATION
          </Typography>
          <Typography variant='h2' style={{ fontFamily: 'tuppence' }}>
            WORK
          </Typography>
        </Space>

        {/* Images */}
        <Box onResize={undefined} onResizeCapture={undefined} className={classes.images}>
          <Image src={mask6} />
          <Image src={mask9} />
          <Image src={btbgrain} />
          <Image src={mask4} />
          <Image src={mask7} />
          <Image src={mask8} />
        </Box>
      </Space>
    </Space>
  );
};
