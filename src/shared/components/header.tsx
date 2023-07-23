import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import {useTheme} from '../../config/theme';
import Box from '../atoms/box';
import Touchable from '../atoms/touchable';

const menu = require('../../../assets/icons/menu.png');
const profile = require('../../../assets/images/kemal.jpg');

const SIZE = 24;

const Header = ({}: NativeStackHeaderProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Box
      backgroundColor="white"
      flexDirection="row"
      alignItems="center"
      width="100%"
      justifyContent="space-between"
      padding="sm"
      style={{marginTop: insets.top}}>
      <Touchable>
        <Image
          source={menu}
          style={{
            width: SIZE,
            height: SIZE,
            borderRadius: theme.spacing.sm,
          }}
          resizeMode="cover"
        />
      </Touchable>
      <Box>
        <Image
          source={profile}
          style={{
            width: SIZE * 1.5,
            height: SIZE * 1.5,
            borderRadius: theme.spacing.xs,
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
