import React from 'react';

import Box from '../shared/atoms/box';
import {ScrollView} from 'react-native';
import Welcome from '../shared/components/welcome';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box flex={1} padding="sm" backgroundColor="white">
        <Welcome />
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
