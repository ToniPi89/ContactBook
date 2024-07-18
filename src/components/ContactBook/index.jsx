import { useEffect, useState } from 'react';
import JohnAvatar from "../../assets/John.png"
import JaneAvatar from "../../assets/Jane.png"
import Contact from '../Contact'
import { ContactBookContainer } from './styled'
import AddContact from '../AddContact'

const initialContacts = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        address: "Bahnhofstrasse 2, Zurich",
        phone: "0791112233",
        avatar: JohnAvatar, // Use JohnAvatar or JaneAvatar initially
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        address: "Dorfplatz 5, Basel",
        phone: "0791112244",
        avatar: JaneAvatar, // Use JohnAvatar or JaneAvatar initially
    }
];

const ContactBook = () => {
    const [contacts, setContacts] = useState(() => {
               // Load contacts from localStorage or use initialContacts if no saved data

       const savedContacts = localStorage.getItem("contacts");
       try {
        return savedContacts ? JSON.parse(savedContacts) : initialContacts;
      } catch (error) {
        console.error("Failed to parse contacts from local storage:", error);
        return initialContacts;
    }
    });

        // Save contacts to localStorage whenever contacts state changes

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    const handleAddContact = (newContact) => {
        // Add newContact to your contacts list
        setContacts((prevContacts) => [...prevContacts, newContact]);
    };

    return (
        <ContactBookContainer>
            <AddContact onAddContact={handleAddContact} />
          {contacts.map((contact) => (
            <Contact key={contact.id} data={contact} />
          ))}
        </ContactBookContainer>
    );
};

export default ContactBook;
