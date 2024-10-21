import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../App';
import {Button, Text, View} from 'react-native';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateContact'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export const CreateContactScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Crear contacto</Text>
      <Button title="Ir a Inicio" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
