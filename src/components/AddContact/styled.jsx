import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #e5d9d9;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20px;
  border: 5px solid #8191ab;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

export const ErrorText = styled.span`
  color: red;
  display: block;
  margin-top: 5px;
`;
export const FileInputWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FileInputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #f44336;
  color: white;
  width: 130px;
  padding: 5px;
  border-radius: 4px;
  text-align: center;
  &:hover {
    background-color: #333;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const AvatarPreview = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-left: 10px;
  border-radius: 50%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #333;
  }
`;

export const AddButton = styled.button`
  background-color: #417fc2;
  color: #fff;
  padding: 10px 20px;
  border: 5px solid #8191ab; 
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #284461;
  }

  &:active {
    background-color: #1a2b3c; /* Change to the color you want when the button is clicked */
  }

`;
