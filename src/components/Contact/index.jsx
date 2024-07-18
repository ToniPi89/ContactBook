import { useState, useEffect } from 'react';
import {
  ContactContainer,
  ContactHeader,
  ContactDetails,
  ContactAvatar,
  ContactParagraph,
  ContactSpan,
  ContactButtonsContainer,
} from './styled';
import ArrowUp from '../../assets/arrow-up.svg';
import ArrowDown from '../../assets/arrow-down.svg';

const Contact = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');


  useEffect(() => {
    // Create blob URL for the avatar when component mounts
    if (data.avatar instanceof File) {
      const url = URL.createObjectURL(data.avatar);
      setAvatarUrl(url);
    } else {
      setAvatarUrl(data.avatar); // Use base64 string directly
    }

    // Clean up the blob URL when component unmounts
    return () => {
      if (data.avatar instanceof File) {
        URL.revokeObjectURL(avatarUrl);
      }
    };
  }, [data.avatar, avatarUrl]);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <ContactContainer>
      <ContactHeader onClick={handleToggleDetails}>
        <h3>
          {data.firstName} {data.lastName}
        </h3>
        <ContactAvatar src={avatarUrl} alt="avatar" />
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
