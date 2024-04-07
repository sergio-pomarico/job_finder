import React from 'react';
import Box from '../../atoms/box';
import Text from '../../atoms/text';
import {useTheme} from '../../../config/theme';

const About = ({info}: {info: string}) => {
  const theme = useTheme();
  return (
    <Box mt="l" backgroundColor="white" borderRadius="m" padding="m">
      <Text fontSize={theme.spacing.l} variant="subtitle" mb="xs">
        About the job:
      </Text>
      <Box>
        <Text>{info}</Text>
      </Box>
    </Box>
  );
};

export default About;
