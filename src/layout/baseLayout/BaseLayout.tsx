import React from 'react';
import { SearchPanel } from '../../entities/search';
import { LeftSideBar, RightSideBar } from '../../widgets/sidebars';
import { Player } from '../../widgets/player';
import styles from './BaseLayout.module.scss';
// import '../../../styles/global.scss';

interface IBaseLayout {
  children: any;
}

export const BaseLayout = ({ children }: IBaseLayout) => (
  <div className={styles.baseLayout}>
    <LeftSideBar />
    <section className={styles.sectionLayout}>
      <main className={styles.mainLayout}>
        <SearchPanel />
        {children}
        <Player />
      </main>
    </section>
    <RightSideBar />
  </div>
);

