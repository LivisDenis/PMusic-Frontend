import React from 'react';
import { Info } from '../ProfileInfo/ProfileInfo';
import { Setting } from '../Settings/Settings';
import { useUserInfoStore } from '../../../../shared/store/UserInfoStore';
import img from '../../../../shared/assets/sidebar/playlist/cover7.png';
import styles from './ProfileBlock.module.scss';

export const ProfileInfo = () => {
  const { userName } = useUserInfoStore((state) => state);
  return (
    <section className={styles.wrapper}>
      <div>
        <h1 className={styles.name}>{userName}</h1>
        <div className={styles.infoBlock}>
          <img src={img} alt="author" />
          <Info />
        </div>
        <hr />
        <div className={styles.about}>
          <h2 className={styles.title}>Описание</h2>
          <p>
            Братан, хорош, давай, давай, вперёд! Контент в кайф, можно ещё? Вообще красавчик! Можно вот этого вот
            почаще?
          </p>
        </div>
        <hr />
      </div>
      <Setting />
    </section>
  );
};
