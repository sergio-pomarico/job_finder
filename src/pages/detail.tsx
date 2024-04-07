import React, {useEffect, useState} from 'react';
import {MainRoutes, StackNavigationProps} from '../core/navigation';
import {useDispatch, useSelector} from 'react-redux';

import Box from '../shared/atoms/box';
import {RefreshControl, ScrollView} from 'react-native';
import {getJobDetail} from '../store/jobs';
import {RootState} from '../core/redux';
import Company from '../shared/components/detail/company';
import JobsTabs from '../shared/components/detail/tabs';
import About from '../shared/components/detail/about';
import Specifics from '../shared/components/detail/specifics';
import JobFooter from '../shared/components/detail/footer';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

const DetailScreen = ({route}: StackNavigationProps<MainRoutes, 'Detail'>) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const {job} = useSelector((state: RootState) => state.jobs);

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const onRefresh = () => {
    setRefreshing(true);
  };
  useEffect(() => {
    dispatch(getJobDetail(id));
  }, [dispatch, id]);

  const displayTabContent = () => {
    switch (activeTab) {
      case 'About':
        return <About info={job?.job_description ?? ''} />;
      case 'Qualifications':
        return (
          <Specifics
            title="Qualifications"
            points={job?.job_highlights?.Qualifications ?? ['N/A']}
          />
        );
      case 'Responsibilities':
        return (
          <Specifics
            title="Responsibilities"
            points={job?.job_highlights?.Responsibilities ?? ['N/A']}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box flex={1} padding="sm" backgroundColor="white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Company
          name={job?.employer_name ?? ''}
          location={job?.job_country ?? ''}
          logo={job?.employer_logo ?? ''}
          job={job?.job_title ?? ''}
        />
        <JobsTabs
          data={tabs}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        {displayTabContent()}
      </ScrollView>
      <JobFooter url={job?.job_google_link ?? ''} />
    </Box>
  );
};

export default DetailScreen;
