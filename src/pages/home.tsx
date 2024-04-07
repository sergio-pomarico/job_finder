import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import Box from '../shared/atoms/box';

import {getNearJobs, getPorpularJobs} from '../store/jobs';
import Text from '../shared/atoms/text';
import Search from '../shared/components/home/search';
import Tabs from '../shared/components/tabs';
import PopularJobs from '../shared/components/home/popular_jobs';
import NearbyJobs from '../shared/components/home/near_jobs';
import {MainRoutes, StackNavigationProps} from '../core/navigation';

const HomeScreen = ({navigation}: StackNavigationProps<MainRoutes, 'Home'>) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

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
        <Search
          onPressSeach={() => {
            if (searchTerm.length > 0) {
              navigation.push('Search', {query: searchTerm});
            }
          }}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        <Tabs onPressTab={_ => {}} />
        <PopularJobs />
        <NearbyJobs />
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
