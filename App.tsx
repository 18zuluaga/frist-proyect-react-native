import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface ContactCardProps {
  name: string;
  role: string;
  styles: Record<string, any>;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, role, styles }) => {
  return (
    <View style={styles.contacto}>
      <Text style={styles.contactName}>{name}</Text>
      <Text style={styles.contactRole}>{role}</Text>
    </View>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [showContacts, setShowContacts] = useState(true);

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
      flex: 1,
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
    { name: 'Juan', role: 'Cliente' },
    { name: 'Maria', role: 'Empleador' },
    { name: 'Pepita', role: 'Cliente' },
    { name: 'Mama', role: 'Cliente' },
    { name: 'Jose', role: 'Empleador' },
    { name: 'Daniel', role: 'Cliente' },
    { name: 'Jeronimo', role: 'Empleador' },
    { name: 'Tomas', role: 'Cliente' },
    { name: 'Jacobo', role: 'Cliente' },
    { name: 'Angel', role: 'Cliente' },
    { name: 'Gilberto', role: 'Empleador' },
    { name: 'Isaac', role: 'Cliente' },
    { name: 'Cristian', role: 'Empleador' },
    { name: 'Nicolas', role: 'Cliente' },
    { name: 'Alfonso', role: 'Empleador' },
  ];

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 50 && showContacts) {
      setShowContacts(false);
    } else if (offsetY <= 50 && !showContacts) {
      setShowContacts(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
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
        <Image source={require('./assets/plus.png')} style={styles.image} />
      </View>
      {showContacts && (
        <TextInput
          placeholder="Buscar contacto"
          placeholderTextColor="gray"
          style={styles.searchInput}
        />
      )}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.contentContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
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
}

export default App;
