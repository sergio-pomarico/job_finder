import React from 'react';

import {useSelector} from 'react-redux';
import {Image} from 'react-native';
import {RootState} from '../../core/redux';

import Job from '../../core/job';
import Box from '../atoms/box';
import Text from '../atoms/text';
import Touchable from '../atoms/touchable';

import {useTheme} from '../../config/theme';
import {checkImageURL} from '../../utils';

const NearbyJobs = ({}) => {
  const theme = useTheme();
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
            shadowOffset={{width: 2, height: 0}}>
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
            <Box>
              <Text
                numberOfLines={1}
                fontSize={theme.spacing.l}
                fontFamily="DMSans-Bold">
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
