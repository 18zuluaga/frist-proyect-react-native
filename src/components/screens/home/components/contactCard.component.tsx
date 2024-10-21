import {Text, View} from 'react-native';

interface ContactCardProps {
  name: string;
  role: string;
  styles: Record<string, any>;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  name,
  role,
  styles,
}) => {
  return (
    <View style={styles.contacto}>
      <Text style={styles.contactName}>{name}</Text>
      <Text style={styles.contactRole}>{role}</Text>
    </View>
  );
};
