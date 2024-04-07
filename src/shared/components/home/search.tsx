import React from 'react';

import {Image} from 'react-native';

import Box from '../../atoms/box';
import Input from '../input';
import Touchable from '../../atoms/touchable';

import {useTheme} from '../../../config/theme';

const icon = require('../../../../assets/icons/search.png');
const SIZE = 24;

interface SearchProps {
  onPressSeach: () => void;
}

const Search = ({onPressSeach}: SearchProps) => {
  const theme = useTheme();
  return (
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
        onPress={onPressSeach}
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
  );
};

export default Search;
