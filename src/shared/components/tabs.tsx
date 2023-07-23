import React, {useState} from 'react';
import {FlatList} from 'react-native';

import {useTheme} from '../../config/theme';

import Box from '../atoms/box';
import Touchable from '../atoms/touchable';
import Text from '../atoms/text';

import {jobTypes} from '../../config/constans';

const parseName = (name: string) => name.toLowerCase().replace('-', '');

interface TabsPros {
  onPressTab: (arg0: string) => void;
}

const Tabs = ({}: TabsPros) => {
  const [activeTab, setActiveTab] = useState<String>(parseName(jobTypes[0]));
  const theme = useTheme();
  return (
    <Box width="100%" marginTop="l">
      <FlatList
        data={jobTypes}
        horizontal
        renderItem={({item}) => {
          const _item = parseName(item);
          return (
            <Touchable
              onPress={() => {
                setActiveTab(_item);
              }}
              borderRadius="l"
              borderWidth={1}
              paddingHorizontal="sm"
              style={{
                paddingVertical: theme.spacing.xs / 2,
                borderColor:
                  _item === activeTab
                    ? theme.colors.secondary
                    : theme.colors.lightGray,
              }}>
              <Text
                fontFamily="DMSans-Medium"
                style={{
                  color:
                    _item === activeTab
                      ? theme.colors.secondary
                      : theme.colors.lightGray,
                }}>
                {item}
              </Text>
            </Touchable>
          );
        }}
        contentContainerStyle={{gap: theme.spacing.sm}}
        keyExtractor={item => parseName(item)}
      />
    </Box>
  );
};

export default Tabs;
