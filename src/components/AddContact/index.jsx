import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  FormContainer,
  Input,
  InputWrapper,
  ErrorText,
  FileInputWrapper,
  FileInputLabel,
  FileInput,
  AvatarPreview,
  ButtonsWrapper,
  Button,
} from './styled';

const AddContact = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    avatar: '', // Store avatar as base64 string
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Read the file as base64 and store it in state
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        avatar: reader.result, // Store base64 string
      }));
    };
    reader.readAsDataURL(file); // Read as base64
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate first name
    if (!formData.firstName.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        firstName: 'First Name is required',
      }));
      return;
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        lastName: 'Last Name is required',
      }));
      return;
    }

    // Validate phone number (digits only, minimum length of 8)
    if (!/^\d{8,}$/.test(formData.phone)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'Phone Number should be digits only and minimum 8 digits',
      }));
      return;
    }

    // If all validations pass, create new contact object
    const newContact = {
      id: uuidv4(),
      ...formData,
    };

    // Call parent component function to add new contact
    onAddContact(newContact);

    // Reset form and errors after submission
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      avatar: '', // Reset avatar
    });
    setFormErrors({
      firstName: '',
      lastName: '',
      phone: '',
    });
  };

  const handleCancel = () => {
    resetForm();
  };

  return (
    <FormContainer>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
       <InputWrapper>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        {formErrors.firstName && <ErrorText>{formErrors.firstName}</ErrorText>}
       </InputWrapper> 
      <InputWrapper>
       <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        {formErrors.lastName && <ErrorText>{formErrors.lastName}</ErrorText>}
       </InputWrapper> 
       <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <InputWrapper>
        <Input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {formErrors.phone && <ErrorText>{formErrors.phone}</ErrorText>}
       </InputWrapper>
       <FileInputWrapper>
       <FileInputLabel htmlFor="avatar">Choose Avatar</FileInputLabel>

        <FileInput id="avatar" type="file" name="avatar" onChange={handleFileChange} />
        {formData.avatar && (
          <AvatarPreview
            src={formData.avatar}
            alt="Avatar Preview"
            
          />
        )}
        </FileInputWrapper>

        <ButtonsWrapper>
          <Button type="submit">Save</Button>
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
        </ButtonsWrapper>
      </form>
    </FormContainer>
  );
};

export default AddContact;
