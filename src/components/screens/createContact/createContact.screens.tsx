import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/navigation';
import { useContact } from '../../../hook/useContacts';

interface FormData {
  name: string;
  role: 'Cliente' | 'Empleado';
  phoneNumber: string;
}

export const CreateContactScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();
  const {addContact} = useContact();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onSubmit = (data: FormData) => {
    addContact(data);
  };

  const handleCancel = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={require('../../../../assets/rick-rothenberg-YTd1PtoUKlo-unsplash.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Agregar Contacto</Text>

        <Controller
          control={control}
          rules={{required: true}}
          name="name"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholderTextColor="#888"
            />
          )}
        />
        {errors.name && (
          <Text style={styles.error}>El nombre es requerido.</Text>
        )}

        <Controller
          control={control}
          rules={{required: true}}
          name="role"
          render={({field: {onChange, value}}) => (
            <View style={styles.roleContainer}>
              <TouchableOpacity
                onPress={() => onChange('Cliente')}
                style={[
                  styles.roleButton,
                  value === 'Cliente' && styles.selectedRole,
                ]}>
                <Text style={styles.roleText}>Cliente</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onChange('Empleado')}
                style={[
                  styles.roleButton,
                  value === 'Empleado' && styles.selectedRole,
                ]}>
                <Text style={styles.roleText}>Empleado</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        {errors.role && <Text style={styles.error}>El rol es requerido.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[0-9]*$/,
              message: 'Número inválido',
            },
          }}
          name="phoneNumber"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Número de Teléfono"
              keyboardType="numeric"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholderTextColor="#888"
            />
          )}
        />
        {errors.phoneNumber && (
          <Text style={styles.error}>
            {errors.phoneNumber.message || 'El número es requerido.'}
          </Text>
        )}

        <View style={styles.buttonContainer}>
          <Button
            title="Agregar Contacto"
            onPress={handleSubmit(onSubmit)}
            color="#000"
          />
        </View>

        <View style={styles.cancelButtonContainer}>
          <Button
            title="Cancelar"
            onPress={handleCancel}
            color="#ff4444" // Color rojo para el botón de cancelar
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 30,
    color: '#000',
    textAlign: 'left',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  roleButton: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#f9f9f9',
  },
  selectedRole: {
    backgroundColor: '#e0e0e0',
  },
  roleText: {
    fontSize: 16,
    color: '#000',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'left',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  cancelButtonContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
});

export default CreateContactScreen;
