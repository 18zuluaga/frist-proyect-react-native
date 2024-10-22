import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from '../components/screens/home/home.screens';
import { CreateContactScreen } from '../components/screens/createContact/createContact.screens';

export type RootStackParamList = {
  Home: undefined;
  CreateContact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();



export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateContact"  component={CreateContactScreen} options={{ title: ''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
