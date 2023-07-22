import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../pages/home';
import Header from '../shared/components/header';

const AppStack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          // eslint-disable-next-line react/no-unstable-nested-components
          header: (props: NativeStackHeaderProps) => <Header {...props} />,
          headerShadowVisible: false,
        }}>
        <AppStack.Screen name="Home" component={HomeScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
