import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  border: 5px solid #8191ab; 
  padding: 16px; 
  background-color: #e5d9d9;
  border-radius: 8px
  
`;

export const ContactHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  
  &:hover img[alt='caret'] {
    background-color: var(--primary-color-light);
    border-radius: 50%;
  }
`;

export const ContactDetails = styled.div`
  margin-top: 16px;
`;

export const ContactParagraph = styled.p`
  margin: 8px 0;
  font-size: 12px;
`;

export const ContactSpan = styled.span`
  font-size: 12px;
  font-weight: 700;
  margin-right: 8px;
`;

export const ContactAvatar = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  background-color: cadetblue;
  margin-right: 16px;
`;

export const ContactButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const EditDeleteButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

export const EditButton = styled(EditDeleteButton)`
  background-color: #4caf50; /* Green */
`;

export const DeleteButton = styled(EditDeleteButton)`
  background-color: #f44336; /* Red */
`;