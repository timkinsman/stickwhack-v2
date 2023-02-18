import { Box } from 'petald';
import { Example } from '../../components/Example';

export const NotFound = () => {
  return (
    <Box onResize={undefined} onResizeCapture={undefined}>
      <Example msg='Not Found!' />
    </Box>
  );
};
