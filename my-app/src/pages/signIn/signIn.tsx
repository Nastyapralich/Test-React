import React, { useState } from 'react';
import styles from './signIn.module.scss';
import { useNavigate } from 'react-router-dom';
import { RoutesList } from '../router';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      setError('User not found. Please sign up.');
      return;
    }
    const user = JSON.parse(storedUser);

    if (user.email === email && user.password === password) {
        setError('');
        navigate(RoutesList.AllVideos);
      } else {
        setError('Invalid email or password.');
      }
    };

  return (
    <div className={styles.signInContainer}>
      <h2 className={styles.signInTitle}>Sign In</h2>
      <form className={styles.signInForm} onSubmit={handleSignIn}>
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
        <button type="submit" className={styles.submitButton}>
          Sign In
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};