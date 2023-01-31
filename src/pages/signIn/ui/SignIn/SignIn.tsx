import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserInfoStore } from '../../../../shared/store/UserInfoStore';
import { HOME } from '../../../../shared/const/routes';
import { ModalLayout } from '../../../../layout';
import { SearchPanel } from '../../../../entities/search';
import { AuthForm } from '../../../../widgets/authForm';
import { Player } from '../../../../widgets/player';
import styles from './SignIn.module.scss';

const SignIn = () => {
  const isAuth = useUserInfoStore((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate(HOME);
    }
  }, [isAuth]);

  return (
    <ModalLayout>
      <div className={styles.modalWrapper}>
        <SearchPanel />
        <AuthForm title="Вход" />
        <Player />
      </div>
    </ModalLayout>
  );
};

export default SignIn;
