import React, {useEffect} from 'react';
import {FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MainRoutes, StackNavigationProps} from '../core/navigation';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import Box from '../shared/atoms/box';
import {getSearchTerm} from '../store/jobs';
import {RootState} from '../core/redux';
import Touchable from '../shared/atoms/touchable';
import {useTheme} from '../config/theme';
import {checkImageURL} from '../utils';
import Text from '../shared/atoms/text';

const ListHeaderComponent = ({query}: {query: string}) => (
  <Box>
    <Text color="secondary" fontSize={20}>
      {`Search results for "${query}"`}
    </Text>
  </Box>
);

const SearchScreen = ({route}: StackNavigationProps<MainRoutes, 'Search'>) => {
  const {query} = route.params;
  const dispatch = useDispatch();
  const theme = useTheme();
  const {searchResults} = useSelector((state: RootState) => state.jobs);
  const navigation = useNavigation<NavigationProp<MainRoutes>>();
  const onPressCard = (id: string) => navigation.navigate('Detail', {id});

  useEffect(() => {
    dispatch(getSearchTerm({term: query, page: 1}));
  }, [dispatch, query]);

  return (
    <Box flex={1} padding="m" backgroundColor="white">
      <FlatList
        data={searchResults}
        keyExtractor={job => job?.job_id}
        contentContainerStyle={{
          gap: theme.spacing.l,
          marginHorizontal: theme.spacing.xs,
        }}
        ListHeaderComponent={<ListHeaderComponent query={query} />}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Touchable
            key={`nearby_job_${item?.job_id}`}
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
            onPress={() => onPressCard(item.job_id)}>
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
            <Box flex={1} ml="m">
              <Text
                numberOfLines={1}
                fontSize={theme.spacing.l}
                fontFamily="DMSans-Bold"
                ellipsizeMode="tail">
                {item.job_title}
              </Text>
              <Text
                color="gray"
                fontSize={theme.spacing.m - 2}
                textTransform="capitalize">
                {item.job_employment_type}
              </Text>
            </Box>
          </Touchable>
        )}
      />
    </Box>
  );
};

export default SearchScreen;
