import React from 'react';
import Box from '../../atoms/box';
import {FlatList} from 'react-native';
import Touchable from '../../atoms/touchable';
import Text from '../../atoms/text';

interface JobsTabsProps {
  data: string[];
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
}

interface JobsTabsButtonProps {
  name: string;
  activeTab: string;
  onHandleSearchType: (tab: string) => void;
}

const TabButton = ({
  name,
  activeTab,
  onHandleSearchType,
}: JobsTabsButtonProps) => {
  return (
    <Touchable
      paddingVertical="xs"
      paddingHorizontal="l"
      borderRadius="xl"
      shadowColor="lightGray"
      shadowOpacity={0.25}
      shadowRadius={2}
      marginHorizontal="sm"
      shadowOffset={{width: 2, height: 0}}
      onPress={() => onHandleSearchType(name)}
      backgroundColor={name === activeTab ? 'primary' : 'gray'}>
      <Text color={name === activeTab ? 'white' : 'lightGray'}>{name}</Text>
    </Touchable>
  );
};

const JobsTabs = ({data, activeTab, setActiveTab}: JobsTabsProps) => {
  return (
    <Box marginVertical="xs">
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.toLowerCase()}
        renderItem={({item}) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={tab => setActiveTab(tab)}
          />
        )}>
        <Box />
      </FlatList>
    </Box>
  );
};

export default JobsTabs;
