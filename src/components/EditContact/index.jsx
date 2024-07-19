import { useState, useEffect } from 'react';
import { FormContainer, Input, InputWrapper, ErrorText, FileInputWrapper, 
    FileInputLabel, FileInput, AvatarPreview, ButtonsWrapper, Button 
 } from '../AddContact/styled';

const EditContact = ({ contact, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    avatar: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });

  useEffect(() => {
    if (contact) {
      setFormData({
        firstName: contact.firstName,
        lastName: contact.lastName,
        address: contact.address,
        phone: contact.phone,
        avatar: contact.avatar,
      });
    }
  }, [contact]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        avatar: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        firstName: 'First Name is required',
      }));
      return;
    }

    if (!formData.lastName.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        lastName: 'Last Name is required',
      }));
      return;
    }

    if (!/^\d{8,}$/.test(formData.phone)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'Phone Number should be digits only and minimum 8 digits',
      }));
      return;
    }

    onSave({ ...contact, ...formData });
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      avatar: '',
    });
    setFormErrors({
      firstName: '',
      lastName: '',
      phone: '',
    });
  };

  return (
    <FormContainer>
      <h2>Edit Contact</h2>
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
            <AvatarPreview src={formData.avatar} alt="Avatar Preview" />
          )}
        </FileInputWrapper>
        <ButtonsWrapper>
          <Button type="submit">Save</Button>
          <Button type="button" onClick={onCancel}>
            Cancel
          </Button>
        </ButtonsWrapper>
      </form>
    </FormContainer>
  );
};

export default EditContact;
