import styles from './LeftSidebar.module.scss';
import { logo } from '../../../../shared/const/importSvg';
import { TrackListSidebar } from '../TrackListSidebar/TrackListSidebar';

export const LeftSideBar = () => {
  const amountTracks = window.screen.height > 1100 ? 9 : 7;

  return (
    <aside className={styles.leftSideBar}>
      <img className={styles.logo} src={logo} alt="" />
      {/* <NavMenu /> */}
      <hr className="sideBarHr" />
      <TrackListSidebar amountTracks={amountTracks} header="Ваш плейлист" />
    </aside>
  );
};

