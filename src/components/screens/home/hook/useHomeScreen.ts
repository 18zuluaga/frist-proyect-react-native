import {useState, useEffect} from 'react';

const contactst = [
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

export const useHomeScreen = () => {
  const [showContacts, setShowContacts] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts, setContacts] = useState<any[]>(contactst);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 50 && showContacts) {
      setShowContacts(false);
    } else if (offsetY <= 50 && !showContacts) {
      setShowContacts(true);
    }
  };

  const handlesearch = (name: string) => {
    setSearchQuery(name);
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      const filteredContacts = contactst.filter(contact =>
        contact.name.toLowerCase().startsWith(name.toLowerCase()),
      );
      setContacts(filteredContacts);
    }, 3000);

    setDebounceTimeout(timeout);
  };

  // Limpieza del timeout al desmontar el hook
  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  return {
    showContacts,
    searchQuery,
    setSearchQuery,
    handleScroll,
    setShowContacts,
    contacts,
    setContacts,
    handlesearch,
  };
};
