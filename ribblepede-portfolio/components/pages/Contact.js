import React from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

    // Create our state variables and leave them empty until filled
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Set our states based on which was entered using inputType
    if (inputType === 'name') {
        setName(inputValue);
    } else if (inputType === 'email') {
        setEmail(inputValue);
    } else {
        setMessage(inputValue);
    }
  };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      // Check there our fields aren't empty & email is valid
      if (!validateEmail(email) || !name || !message) {
        setErrorMessage('Please fill out all form fields and enter a valid email address');
        return;
      }
  
      // Empty our fields if the form submits
      setName('');
      setEmail('');
      setMessage('');
    };

  return (
    <div>
      <form className="form">
      <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}