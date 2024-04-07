import React from 'react';
import Box from '../../atoms/box';
import Text from '../../atoms/text';
import {useTheme} from '../../../config/theme';

interface SpecificsProps {
  title: string;
  points: string[];
}

const Specifics = ({title, points}: SpecificsProps) => {
  const theme = useTheme();
  return (
    <Box marginTop="l" backgroundColor="white" borderRadius="m" padding="m">
      <Text fontSize={theme.spacing.l} variant="subtitle" mb="xs">
        {title}:
      </Text>
      <Box marginVertical="sm">
        {points.map((item, index) => (
          <Box
            key={item + index}
            flexDirection="row"
            alignItems="center"
            mb="xs">
            <Box
              width={6}
              height={6}
              borderRadius="xs"
              backgroundColor="gray"
              mr="sm"
            />
            <Text>{item}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Specifics;
