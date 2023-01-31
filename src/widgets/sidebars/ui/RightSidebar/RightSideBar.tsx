import { TrackListSidebar } from '../TrackListSidebar/TrackListSidebar';
import styles from './RightSideBar.module.scss';

export const RightSideBar = () => {
  const amountTracks = window.screen.height > 1100 ? 7 : 6;

  return (
    <aside className={styles.rightSideBar}>
      <TrackListSidebar amountTracks={amountTracks} header="Уходящая неделя" />
      <TrackListSidebar amountTracks={amountTracks} header="Уходящий месяц" />
    </aside>
  );
};

