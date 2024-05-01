import React, { useState } from "react";
import styles from "./signIn.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../router";
import { FormContainer } from "../../components/formContainer/formContainer";
import classNames from "classnames";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setError("User not found. Please sign up.");
      return;
    }
    const user = JSON.parse(storedUser);

    if (user.email === email && user.password === password) {
      setError("");
      navigate(RoutesList.AllVideos);
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className={styles.signInContainer}>
      <FormContainer title={"Login"}>
        <form className={classNames(styles.signInForm)} onSubmit={handleSignIn}>
          <div className={classNames(styles.formGroup)}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className={classNames(styles.buttonGroup)}>
            <button className={classNames(styles.registrationButton)} onClick={()=> navigate(RoutesList.SignUp)}>Registration </button>
            <button type="submit" className={classNames(styles.submitButton)}>
              Login
            </button>
          </div>

          {error && <p className={styles.error}>{error}</p>}
        </form>
      </FormContainer>
    </div>
  );
};
