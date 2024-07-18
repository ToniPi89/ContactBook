import styled from 'styled-components';

export const ContactBookContainer = styled.div`
   width: 100%; 
  max-width: 440px; 
  background-color: #a7a7e7;
  border-radius: 8px;
  margin: 0 auto; /* Center horizontally */

  @media (max-width: 768px) {
    /* Adjust for mobile screens */
    max-width: 100%; 
    padding: 16px; 
  }
  
`;
