import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import {useTheme} from '../../config/theme';
import Box from '../atoms/box';
import Touchable from '../atoms/touchable';

const menu = require('../../../assets/icons/menu.png');
const profile = require('../../../assets/images/kemal.jpg');
const back = require('../../../assets/icons/left.png');
const share = require('../../../assets/icons/share.png');

const SIZE = 24;

const Header = ({navigation}: NativeStackHeaderProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const {canGoBack} = navigation;

  return (
    <Box
      backgroundColor="white"
      flexDirection="row"
      alignItems="center"
      width="100%"
      justifyContent="space-between"
      padding="sm"
      style={{marginTop: insets.top}}>
      <Touchable onPress={canGoBack() ? () => navigation.goBack() : undefined}>
        <Image
          source={canGoBack() ? back : menu}
          style={{
            width: SIZE,
            height: SIZE,
            borderRadius: theme.spacing.sm,
          }}
          resizeMode="cover"
        />
      </Touchable>
      <Touchable>
        <Image
          source={canGoBack() ? share : profile}
          style={{
            width: canGoBack() ? SIZE : SIZE * 1.5,
            height: canGoBack() ? SIZE : SIZE * 1.5,
            borderRadius: theme.spacing.sm,
          }}
          resizeMode="cover"
        />
      </Touchable>
    </Box>
  );
};

export default Header;
