import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #b5b5cb;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
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
  font-weight: bold;
  cursor: pointer;
  background-color: red;
  width: 130px ;
  padding: 5px;
  border-radius: 4px;
  text-align: center;
`;

export const FileInput = styled.input`
  display: none;
`;

export const AvatarPreview = styled.img`
  display: block;
  max-width: 100px;
  max-height: 100px;
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

  &:last-child {
    margin-right: 0;
  }
`;
