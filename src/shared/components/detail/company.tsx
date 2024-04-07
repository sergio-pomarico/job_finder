import React from 'react';
import Box from '../../atoms/box';
import {Image} from 'react-native';
import {checkImageURL} from '../../../utils';
import Text from '../../atoms/text';

interface CompanyProps {
  name: string;
  logo: string;
  job: string;
  location: string;
}

const SIZE = 18;

const locationIcon = require('../../../../assets/icons/location.png');

const Company = ({logo, name, job, location}: CompanyProps) => {
  return (
    <Box marginVertical="m" justifyContent="center" alignItems="center">
      <Box
        width={80}
        height={80}
        justifyContent="center"
        alignItems="center"
        backgroundColor="white"
        mr="m">
        {checkImageURL(logo) ? (
          <Image
            source={{uri: logo}}
            width={80 * 0.8}
            height={80 * 0.8}
            resizeMode="contain"
          />
        ) : (
          <Box
            backgroundColor="lightGray"
            width={80 * 0.8}
            height={80 * 0.8}
            borderRadius="m"
          />
        )}
      </Box>
      <Box mb="sm">
        <Text color="primary" variant="title">
          {name}
        </Text>
      </Box>
      <Box flexDirection="row" justifyContent="center" alignItems="center">
        <Text color="primary" variant="subtitle">
          {job}
        </Text>
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          ml="xs">
          <Image
            source={locationIcon}
            style={{
              width: SIZE,
              height: SIZE,
            }}
            resizeMode="cover"
          />
          <Text color="gray">{location}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Company;
