import { useState, useEffect } from 'react';
import {
  ContactContainer,
  ContactHeader,
  ContactDetails,
  ContactAvatar,
  ContactParagraph,
  ContactSpan,
  ContactButtonsContainer,
  EditButton,
  DeleteButton,
} from './styled';
import ArrowUp from '../../assets/arrow-up.svg';
import ArrowDown from '../../assets/arrow-down.svg';

const Contact = ({ data, onEdit, onDelete }) => {
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

  const handleDelete = () => {
    // Confirm deletion before proceeding
    if (window.confirm('Are you sure you want to delete this contact?')) {
      onDelete(data.id); // Call the onDelete prop if confirmed
    }
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
      <ContactButtonsContainer>
        <EditButton onClick={onEdit}>Edit</EditButton>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton> {/* **Updated handler** */}
      </ContactButtonsContainer>
    </ContactContainer>
  );
};

export default Contact;
