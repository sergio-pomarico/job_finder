import React from 'react';

import {useSelector} from 'react-redux';
import {Image, FlatList} from 'react-native';
import {RootState} from '../../core/redux';

import Box from '../atoms/box';
import Text from '../atoms/text';
import Touchable from '../atoms/touchable';

import {useTheme} from '../../config/theme';
import {checkImageURL} from '../../utils';

const PopularJobs = ({}) => {
  const theme = useTheme();
  const {porpularJobs} = useSelector((state: RootState) => state.jobs);
  return (
    <Box marginTop="xxl">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text color="primary" fontSize={20} fontFamily="DMSans-Medium">
          Popular Jobs
        </Text>
        <Touchable>
          <Text color="gray" fontSize={16} fontFamily="DMSans-Medium">
            See all
          </Text>
        </Touchable>
      </Box>
      <Box marginTop="m">
        <FlatList
          data={porpularJobs}
          keyExtractor={job => job?.job_id}
          horizontal
          contentContainerStyle={{
            gap: theme.spacing.l,
            marginVertical: theme.spacing.xs,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Touchable
              width={250}
              padding="l"
              justifyContent="space-between"
              shadowColor="black"
              shadowOpacity={0.25}
              shadowRadius={2}
              shadowOffset={{width: 2, height: 0}}
              backgroundColor="white">
              <Box
                width={80}
                height={80}
                borderRadius="m"
                justifyContent="center"
                backgroundColor="white"
                alignItems="center">
                {checkImageURL(item.employer_logo) ? (
                  <Image
                    source={{uri: item.employer_logo}}
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
              <Text marginTop="m" color="gray" fontSize={theme.spacing.m}>
                {item.employer_name}
              </Text>
              <Text numberOfLines={1} fontSize={theme.spacing.l}>
                {item.job_title}
              </Text>
              <Text color="gray" fontSize={theme.spacing.m - 2}>
                {item.job_country}
              </Text>
            </Touchable>
          )}
        />
      </Box>
    </Box>
  );
};

export default PopularJobs;
