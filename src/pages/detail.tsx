import React from 'react';
import {MainRoutes, StackNavigationProps} from '../core/navigation';

import Box from '../shared/atoms/box';
import Text from '../shared/atoms/text';

const DetailScreen = ({route}: StackNavigationProps<MainRoutes, 'Detail'>) => {
  const {id} = route.params;
  console.log(id);
  return (
    <Box flex={1} padding="sm" backgroundColor="white">
      <Text>Detail</Text>
    </Box>
  );
};

export default DetailScreen;
