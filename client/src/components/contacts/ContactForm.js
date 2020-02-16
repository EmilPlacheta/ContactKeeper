import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  //contact state
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  //form control
  function onChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Add Contact</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type:</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        check={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        check={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional{' '}
      <div>
        <input
          type='submit'
          value='Add Contact'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default ContactForm;
