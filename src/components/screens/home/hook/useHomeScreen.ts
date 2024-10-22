import {useState, useEffect} from 'react';
import { useContact } from '../../../../hook/useContacts';


export const useHomeScreen = () => {
  const [showContacts, setShowContacts] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const  { contacts } = useContact();
  const [searchcontact, setSearchcontact] = useState<any[]>(contacts);
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
      const filteredContacts = searchcontact.filter(contact =>
        contact.name.toLowerCase().startsWith(name.toLowerCase()),
      );
      setSearchcontact(filteredContacts);
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
    contacts: searchcontact,
    handlesearch,
  };
};
