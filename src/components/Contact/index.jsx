import { useState } from 'react';
import { ContactContainer,ContactHeader, ContactDetails, ContactAvatar, ContactParagraph, ContactSpan, ContactButtonsContainer } from './styled';
import ArrowUp from "../../assets/arrow-up.svg"
import ArrowDown from "../../assets/arrow-down.svg"

const Contact = ({ data, setContacts }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <ContactContainer>
      <ContactHeader onClick={handleToggleDetails}>
        <h3>
          {data.firstName} {data.lastName}
        </h3>
        <ContactAvatar src={data.avatar} alt="avatar" />
        <img src={showDetails ? ArrowUp : ArrowDown} alt="caret" />
      </ContactHeader>
      {showDetails && (
        <ContactDetails>
          <ContactParagraph>
            <ContactSpan>Address: {data.address}</ContactSpan> 
          </ContactParagraph>
          <ContactParagraph>
            <ContactSpan>Phone: {data.phone}</ContactSpan> 
          </ContactParagraph>
        
        </ContactDetails>
      )}
    </ContactContainer>
  );
};

export default Contact;
