import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import Box from '../shared/atoms/box';

import {getNearJobs, getPorpularJobs} from '../store/jobs';
import Text from '../shared/atoms/text';
import Search from '../shared/components/search';
import Tabs from '../shared/components/tabs';
import PopularJobs from '../shared/components/popular_jobs';
import NearbyJobs from '../shared/components/near_jobs';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPorpularJobs('React Native developer'));
    dispatch(getNearJobs('React Native developer, CO'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box flex={1} padding="sm" backgroundColor="white">
        <Box>
          <Text color="secondary" fontSize={20}>
            Hello Sergio
          </Text>
          <Text color="primary" fontSize={20} marginTop="xs" fontWeight="bold">
            Find your perfect job
          </Text>
        </Box>
        <Search />
        <Tabs onPressTab={_ => {}} />
        <PopularJobs />
        <NearbyJobs />
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
