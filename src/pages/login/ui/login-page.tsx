import styles from './login-page.module.css';
import { LoginForm } from '@src/features/login';

export const LoginPage = () => {
  return (
    <main className={styles.loginPageContainer}>
      <h2>Log in</h2>
      <LoginForm />
    </main>
  );
};
