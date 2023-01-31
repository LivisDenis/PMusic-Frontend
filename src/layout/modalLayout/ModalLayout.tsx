import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ModalLayout.module.scss';
import { LeftSideBar, RightSideBar } from '../../widgets/sidebars';
// import '../../../styles/global.scss';

interface IBaseLayout {
  children: any;
}

export const ModalLayout = ({ children }: IBaseLayout) => {
  const navigate = useNavigate();

  return (
    <div className={styles.layoutWrapper}>
      <LeftSideBar />
      {children}
      <RightSideBar />
      <div onClick={() => navigate(-1)} className={styles.bgc}></div>
    </div>
  );
};

