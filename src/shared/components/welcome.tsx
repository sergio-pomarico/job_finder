import React from 'react';
import {Image} from 'react-native';
import {useTheme} from '../../config/theme';

import Box from '../atoms/box';
import Text from '../atoms/text';
import Touchable from '../atoms/touchable';
import Input from '../components/input';
import Tabs from './tabs';

const icon = require('../../../assets/icons/search.png');

const SIZE = 24;

const Welcome = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Text color="secondary" fontSize={20}>
          Hello Sergio
        </Text>
        <Text color="primary" fontSize={20} marginTop="xs" fontWeight="bold">
          Find your perfect job
        </Text>
      </Box>
      <Box
        flexDirection="row"
        justifyContent="center"
        alignContent="center"
        marginTop="l"
        height={50}>
        <Box
          flex={1}
          alignContent="center"
          marginRight="xs"
          borderRadius="m"
          height="100%">
          <Input placeholder="What are looking for ?" onChance={() => {}} />
        </Box>
        <Touchable
          onPress={() => {}}
          height="100%"
          width={50}
          marginLeft="xs"
          borderRadius="sm"
          backgroundColor="tertiary"
          justifyContent="center">
          <Image
            source={icon}
            style={{
              width: SIZE,
              height: SIZE,
              tintColor: theme.colors.white,
              marginHorizontal: (50 - SIZE) / 2,
            }}
            resizeMode="contain"
          />
        </Touchable>
      </Box>
      <Tabs onPressTab={_ => {}} />
    </Box>
  );
};

export default Welcome;
