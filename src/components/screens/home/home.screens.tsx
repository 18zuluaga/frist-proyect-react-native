import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useHomeScreen} from './hook/useHomeScreen';
import { ContactCard } from './components/contactCard.component';


type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {showContacts, handleScroll} = useHomeScreen();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundStyle.backgroundColor,
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 10,
      paddingTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? Colors.light : Colors.dark,
      backgroundColor: backgroundStyle.backgroundColor,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: !isDarkMode ? Colors.darker : Colors.lighter,
    },
    image: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
    searchInput: {
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 25,
      paddingHorizontal: 15,
      backgroundColor: !isDarkMode ? Colors.lighter : '#333',
      color: !isDarkMode ? Colors.darker : Colors.lighter,
      marginTop: showContacts ? 10 : 0,
      width: '90%',
    },
    searchInputs: {
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 25,
      paddingHorizontal: 15,
      backgroundColor: !isDarkMode ? Colors.lighter : '#333',
      color: !isDarkMode ? Colors.darker : Colors.lighter,
      marginTop: showContacts ? 10 : 0,
    },
    contacto: {
      backgroundColor: !isDarkMode ? Colors.lighter : '#444',
      borderRadius: 10,
      padding: 15,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 2,
    },
    contactName: {
      fontWeight: '700',
      fontSize: 18,
      color: !isDarkMode ? Colors.darker : Colors.lighter,
    },
    contactRole: {
      color: 'gray',
      fontSize: 14,
    },
    contentContainer: {
      marginTop: 10,
    },
  });

  const contacts = [
    {name: 'Juan', role: 'Cliente'},
    {name: 'Maria', role: 'Empleador'},
    {name: 'Pepita', role: 'Cliente'},
    {name: 'Mama', role: 'Cliente'},
    {name: 'Jose', role: 'Empleador'},
    {name: 'Daniel', role: 'Cliente'},
    {name: 'Jeronimo', role: 'Empleador'},
    {name: 'Tomas', role: 'Cliente'},
    {name: 'Jacobo', role: 'Cliente'},
    {name: 'Angel', role: 'Cliente'},
    {name: 'Gilberto', role: 'Empleador'},
    {name: 'Isaac', role: 'Cliente'},
    {name: 'Cristiansss', role: 'Empleador'},
    {name: 'Nicolas', role: 'Cliente'},
    {name: 'Alfonso', role: 'Empleador'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {showContacts ? (
          <Text style={styles.title}>Contactos</Text>
        ) : (
          <TextInput
            placeholder="Buscar contacto"
            placeholderTextColor="gray"
            style={styles.searchInput}
          />
        )}
        <TouchableOpacity onPress={() => navigation.navigate('CreateContact')}>
          <Image
            source={require('../../../../assets/plus.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      {showContacts && (
        <TextInput placeholder="Buscar contacto" style={styles.searchInputs} />
      )}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.contentContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            role={contact.role}
            styles={styles}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
