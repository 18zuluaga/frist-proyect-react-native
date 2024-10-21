import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/components/screens/home/home.screens';
import { CreateContactScreen } from './src/components/screens/createContact/createContact.screens';

export type RootStackParamList = {
  Home: undefined;
  CreateContact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();



const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateContact" options={{ headerShown: false }} component={CreateContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
