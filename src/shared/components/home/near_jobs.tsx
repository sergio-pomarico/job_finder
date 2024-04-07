import React from 'react';

import {useSelector} from 'react-redux';
import {Image} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {RootState} from '../../../core/redux';
import {useTheme} from '../../../config/theme';
import Job from '../../../core/job';
import Box from '../../atoms/box';
import Text from '../../atoms/text';
import Touchable from '../../atoms/touchable';

import {checkImageURL} from '../../../utils';
import {MainRoutes} from '../../../core/navigation';

const NearbyJobs = ({}) => {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<MainRoutes>>();
  const onPressCard = (id: string) => navigation.navigate('Detail', {id});
  const {nearJobs} = useSelector((state: RootState) => state.jobs);
  return (
    <Box marginTop="xxl">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text color="primary" fontSize={20} fontFamily="DMSans-Medium">
          Nearby Jobs
        </Text>
        <Touchable>
          <Text color="gray" fontSize={16} fontFamily="DMSans-Medium">
            See all
          </Text>
        </Touchable>
      </Box>
      <Box marginTop="m">
        {nearJobs.map((job: Job) => (
          <Touchable
            key={`nearby_job_${job?.job_id}`}
            flexDirection="row"
            padding="m"
            backgroundColor="white"
            justifyContent="space-between"
            borderRadius="sm"
            alignItems="center"
            marginBottom="m"
            shadowColor="lightGray"
            shadowOpacity={0.25}
            shadowRadius={2}
            shadowOffset={{width: 2, height: 0}}
            onPress={() => onPressCard(job.job_id)}>
            <Box
              width={80}
              height={80}
              borderRadius="m"
              justifyContent="center"
              backgroundColor="white"
              alignItems="center">
              {checkImageURL(job.employer_logo) ? (
                <Image
                  source={{uri: job.employer_logo}}
                  resizeMode="contain"
                  width={80 * 0.8}
                  height={80 * 0.8}
                />
              ) : (
                <Box
                  backgroundColor="lightGray"
                  width={80}
                  height={80}
                  borderRadius="m"
                />
              )}
            </Box>
            <Box flex={1} ml="m">
              <Text
                numberOfLines={1}
                fontSize={theme.spacing.l}
                fontFamily="DMSans-Bold"
                ellipsizeMode="tail">
                {job.job_title}
              </Text>
              <Text
                color="gray"
                fontSize={theme.spacing.m - 2}
                textTransform="capitalize">
                {job.job_employment_type}
              </Text>
            </Box>
          </Touchable>
        ))}
      </Box>
    </Box>
  );
};

export default NearbyJobs;
