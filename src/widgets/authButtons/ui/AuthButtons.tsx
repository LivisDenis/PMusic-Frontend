import { Link } from 'react-router-dom';
import { LOGIN, REGISTER } from '../../../shared/const/routes';
import styles from './AuthButtons.module.scss';

export const AuthButtons = () => {
  return (
    <div className={styles.authBlock}>
      <Link to={LOGIN} className={styles.signInButton}>
        Sign In
      </Link>
      <Link to={REGISTER} className={styles.signUpButton}>
        Sign Up
      </Link>
    </div>
  );
};

