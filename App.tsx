/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type { PropsWithChildren } from 'react';
import {
  Dimensions,
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

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const { height } = Dimensions.get('window');

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({ children, title }: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = StyleSheet.create({
    highlight: {
      fontWeight: '700',
    },
    image: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
    headerTitle: {
      flexDirection: 'row', // Cambia a fila
      alignItems: 'center', // Alinea verticalmente el texto y la imagen
      justifyContent: 'space-between',
    },
    h1: {
      fontSize: 40,
      fontWeight: 'bold',
      color: !isDarkMode ? Colors.darker : Colors.lighter,
      marginRight: 10, // Espacio entre el texto y la imagen
    },
    body: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      height: height,
      padding: 30,
      color: !isDarkMode ? Colors.darker : Colors.lighter,
      gap: 30,
    },
    header: {
      flexDirection: 'column',
      gap: 20,
    },
    main: {
      flexDirection: 'column',
    },
    Fristcontacto : {
      borderTopColor: Colors.lightGray,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      padding: 10,
    },
    contacto : {
      borderBottomColor: Colors.lightGray,
      borderBottomWidth: 1,
      padding: 10,
    },
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.body}>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Text style={styles.h1}>Contactos</Text>
              <Image
                source={require('./assets/plus.png')} // Ruta de la imagen
                style={styles.image} // Aplicar estilos
              />
            </View>
            <View>
              <TextInput placeholder="Buscar contacto" style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 15 }} />
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.Fristcontacto}>
              <Text style={{fontWeight: '900',}}>
                Juan
              </Text>
            </View>
            <View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Maria
              </Text>
            </View>
            <View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Pepita
              </Text>
            </View>
            <View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Mama
              </Text>
            </View>
            <View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Jose
              </Text>
            </View><View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Daniel
              </Text>
            </View><View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Jeronimo
              </Text>
            </View><View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Tomas
              </Text>
            </View><View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Jacobo
              </Text>
            </View><View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Angel
              </Text>
            </View><View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Gilberto
              </Text>
            </View><View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Isaac
              </Text>
            </View><View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Cristian
              </Text>
            </View><View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Nicolas
              </Text>
            </View><View style={styles.contacto}>
              <Text style={{fontWeight: '900',}}>
                Alfonso
              </Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



export default App;
