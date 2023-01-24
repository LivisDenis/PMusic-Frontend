import { Link } from 'react-router-dom';
import { LOGIN, REGISTER } from '../../utils/routes';
import styles from './SignInUpButtons.module.scss';

const SignInUpButtons = () => {
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

export { SignInUpButtons };
