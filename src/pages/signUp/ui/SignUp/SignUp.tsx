import React from 'react';
import { ModalLayout } from '../../../../layout';
import { SearchPanel } from '../../../../entities/search';
import { AuthForm } from '../../../../widgets/authForm';
import { Player } from '../../../../widgets/player';
import styles from './SignUp.module.scss';

const SignUp = () => {
  return (
    <ModalLayout>
      <div className={styles.modalWrapper}>
        <SearchPanel />
        <AuthForm title="Регистрация" />
        <Player />
      </div>
    </ModalLayout>
  );
};

export default SignUp;
