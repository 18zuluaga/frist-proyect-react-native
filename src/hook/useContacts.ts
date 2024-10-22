import {useState} from 'react';



const contactst = [
  {name: 'Juan', role: 'Cliente', number: 43123241},
  {name: 'Maria', role: 'Empleador', number: 43123241},
  {name: 'Pepita', role: 'Cliente', number: 43123241},
  {name: 'Mama', role: 'Cliente', number: 43123241},
  {name: 'Jose', role: 'Empleador', number: 43123241},
  {name: 'Daniel', role: 'Cliente', number: 43123241},
  {name: 'Jeronimo', role: 'Empleador', number: 43123241},
  {name: 'Tomas', role: 'Cliente', number: 43123241},
  {name: 'Jacobo', role: 'Cliente', number: 43123241},
  {name: 'Angel', role: 'Cliente', number: 43123241},
  {name: 'Gilberto', role: 'Empleador', number: 4312},
  {name: 'Isaac', role: 'Cliente', number: 12331243},
  {name: 'Cristiansss', role: 'Empleador', number: 314234},
  {name: 'Nicolas', role: 'Cliente', number: 123313},
  {name: 'Alfonso', role: 'Empleador1', number: 12343143},
];

export const useContact = () => {
  const [contacts, setContacts] = useState<any[]>(contactst);

  function addContact(contact: any) {
    setContacts([...contacts, contact]);
    console.log(contacts);
  }

  return {contacts, setContacts, addContact};
};
