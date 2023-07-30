import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import Box from '../shared/atoms/box';
import Welcome from '../shared/components/welcome';

import {getPorpularJobs} from '../store/jobs';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPorpularJobs('React Native developer'));
  }, [dispatch]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box flex={1} padding="sm" backgroundColor="white">
        <Welcome />
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
