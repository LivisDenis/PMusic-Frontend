import { ITrack, Track } from '../../../../entities/track';
import styles from './TrackList.module.scss';

interface ITrackList {
  amountTracks: number;
  tracksList: ITrack[];
}

export const TrackList = ({ amountTracks, tracksList }: ITrackList) => {
  const elementTrackList = tracksList.map((track, i) => (
    <li key={i}>
      <Track
        index={i + 1}
        author={track.author}
        trackName={track.trackName}
        duration={track.duration}
        likes={track.likes}
        audition={track.audition}
      />
    </li>
  ));

  return (
    <div className={styles.trackListWrapper}>
      <ul className={styles.trackList}>{elementTrackList.slice(0, amountTracks)}</ul>
    </div>
  );
};

