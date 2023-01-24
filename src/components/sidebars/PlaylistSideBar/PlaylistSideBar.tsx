import cover5 from '../../../assets/sidebar/playlist/cover5.png';

import styles from './PlaylistSideBar.module.scss';
import { arrow } from '../../../utils/importSvg';
import PlaylistTrack from './PlaylistTrack';

const trackListSideBar = [
  { author: 'Kizaru', trackName: 'Никто не нужен', img: cover5 },
  { author: 'Yanix', trackName: 'Хайпим', img: cover5 },
  { author: 'Snoop Dog', trackName: 'Smoke Weed', img: cover5 },
  { author: 'Хаски', trackName: 'Панелька', img: cover5 },
  { author: 'Дора', trackName: 'Дура', img: cover5 },
  { author: 'SQWOZ BAB', trackName: 'Султан', img: cover5 },
  { author: 'Дора', trackName: 'Дура', img: cover5 },
  { author: 'Kizaru', trackName: 'Никто не нужен', img: cover5 },
  { author: 'Yanix', trackName: 'Хайпим', img: cover5 },
  { author: 'Snoop Dog', trackName: 'Smoke Weed', img: cover5 },
  { author: 'Хаски', trackName: 'Панелька', img: cover5 },
  { author: 'Kizaru', trackName: 'Никто не нужен', img: cover5 },
  { author: 'Yanix', trackName: 'Хайпим', img: cover5 },
  { author: 'Snoop Dog', trackName: 'Smoke Weed', img: cover5 },
  { author: 'Хаски', trackName: 'Панелька', img: cover5 },
];

interface IPlaylistSideBar {
  amountTracks: number;
  header: string;
}

const PlaylistSideBar = ({ amountTracks, header }: IPlaylistSideBar) => (
  <ul className={styles.playlist}>
    <h1 className={styles.header}>{header}</h1>
    {trackListSideBar
      .map((track, i) => <PlaylistTrack key={i} img={track.img} author={track.author} trackName={track.trackName} />)
      .slice(0, amountTracks)}
    <img className={styles.arrow} src={arrow} alt="" />
    <hr className="sideBarHr" />
  </ul>
);

export { PlaylistSideBar };
