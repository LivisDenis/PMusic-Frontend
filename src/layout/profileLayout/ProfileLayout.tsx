import React from 'react';
import styles from './ProfileLayout.module.scss';
import { LeftSideBar, RightSideBar } from '../../widgets/sidebars';
import { Player } from '../../widgets/player';

interface IProfileLayout {
  children: any;
}

export const ProfileLayout = ({ children }: IProfileLayout) => (
  <div className={styles.baseLayout}>
    <LeftSideBar />
    <section className={styles.sectionLayout}>
      <main className={styles.mainLayout}>
        <div className={styles.body}>{children}</div>
        <Player />
      </main>
    </section>
    <RightSideBar />
  </div>
);

