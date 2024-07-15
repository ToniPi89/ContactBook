import { useState } from 'react'
import JohnAvatar from "../../assets/John.png"
import JaneAvatar from "../../assets/Jane.png"
import Contact from '../Contact'
import { ContactBookContainer } from './styled'



const initialContacts = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        address: "Bahnhofstrasse 2, Zurich",
        phone: "0791112233",
        avatar: JohnAvatar,
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        address: "Dorfplatz 5, Basel'",
        phone: "0791112244",
        avatar: JaneAvatar,
    }
]

const ContactBook = () => {
    const [contacts, setContacts] = useState(initialContacts)

    return (
        <ContactBookContainer>
          {contacts.map((contact) => (
            <Contact key={contact.id} data={contact} />
          ))}
        </ContactBookContainer>
      );
    };
    

export default ContactBook