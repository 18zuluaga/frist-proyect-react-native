import { useState } from 'react';

// Aquí puedes agregar la lógica específica de la pantalla de inicio
export const useHomeScreen = () => {
  const [showContacts, setShowContacts] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 50 && showContacts) {
      setShowContacts(false);
    } else if (offsetY <= 50 && !showContacts) {
      setShowContacts(true);
    }
  };

  return {
    showContacts,
    searchQuery,
    setSearchQuery,
    handleScroll,
    setShowContacts,
  };
};
