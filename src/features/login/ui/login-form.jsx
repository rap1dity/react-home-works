import * as styles from './login-form.module.css';
import { UiInput } from '@src/shared/ui/ui-input';
import { useState } from 'react';
import { login } from '@src/features/login';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const submitForm = async (e) => {
    e.preventDefault();

    const data = await login({ username, password });

    if (!data) {
      return;
    }

    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
  }

  const resetForm = (e) => {
    e.preventDefault();

    setUsername('');
    setPassword('');
  }


  return (
    <form onSubmit={submitForm} onReset={resetForm} className={styles.loginForm}>
      <div className={styles.formInputs}>
        <label><span>User name</span> <UiInput value={username} onChange={setUsername} placeholder="user" type="text"/></label>
        <label><span>Password</span> <UiInput value={password} onChange={setPassword} placeholder="pass123" type="password"/></label>
      </div>

      <div className={styles.loginFormControls}>
        <button className={styles.submit} type="submit">Submit</button>
        <button className={styles.reset} type="reset">Cancel</button>
      </div>
    </form>
  )
}
