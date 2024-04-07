import React from 'react';
import {Image, Linking} from 'react-native';

import Box from '../../atoms/box';
import Text from '../../atoms/text';
import {useTheme} from '../../../config/theme';
import Touchable from '../../atoms/touchable';

const like = require('../../../../assets/icons/heart-ol.png');
const SIZE = 48;

const JobFooter = ({url}: {url: string}) => {
  const theme = useTheme();
  return (
    <Box
      position="absolute"
      bottom={0}
      right={0}
      left={0}
      padding="m"
      backgroundColor="white"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      zIndex={3}>
      <Touchable
        width={SIZE}
        height={SIZE}
        borderWidth={1}
        borderColor="gray"
        borderRadius="m"
        justifyContent="center"
        alignItems="center">
        <Image
          source={like}
          resizeMode="contain"
          style={{width: SIZE * 0.5, height: SIZE * 0.5}}
          tintColor={theme.colors.gray}
        />
      </Touchable>
      <Touchable
        flex={1}
        backgroundColor="tertiary"
        borderRadius="m"
        marginHorizontal="m"
        justifyContent="center"
        alignItems="center"
        height={SIZE}
        onPress={url !== '' ? () => Linking.openURL(url) : undefined}>
        <Text color="white" variant="subtitle">
          Apply for job
        </Text>
      </Touchable>
    </Box>
  );
};

export default JobFooter;
