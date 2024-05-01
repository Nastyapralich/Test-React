import React, { useState } from 'react';
import styles from './signUp.module.scss';
import { FormContainer } from '../../components/formContainer/formContainer';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { RoutesList } from '../router';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password
    };

    console.log(user);
    
    localStorage.setItem('user', JSON.stringify(user));

    setName('');
    setEmail('');
    setPassword('');


  };

  return (
    <div className={classNames(styles.signUpContainer)}>
      <FormContainer title={'Registration'}>
      <form className={classNames(styles.signUpForm)} onSubmit={handleSignUp}>
        <div className={classNames(styles.formGroup)}>
          <label htmlFor="name">
            Name:
          </label>
          <input type="text" id="name" className={styles.input} value={name} onChange={handleNameChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input type="email" id="email" className={styles.input} value={email} onChange={handleEmailChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input type="password" id="password" className={styles.input} value={password} onChange={handlePasswordChange} />
        </div>
        <div className={classNames(styles.buttonGroup)}>
            <button className={classNames(styles.registrationButton)} onClick={()=> navigate(RoutesList.SignIn)}>Login </button>
            <button type="submit" className={classNames(styles.submitButton)}>
              Registration
            </button>
          </div>
      </form>
      </FormContainer>
    
    </div>
  );
};