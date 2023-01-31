import { useParams } from 'react-router-dom';
import React from 'react';
import { AuthorLayout, BaseLayout } from '../../../../layout';
import { Comments } from '../../../../entities/coments';
import { TrackText } from '../../../../widgets/trackText';
import styles from './TrackPage.module.scss';
import img from '../../../../shared/assets/sidebar/playlist/cover5.png';

const TrackPage = () => {
  const { name, trackName } = useParams();

  return (
    <BaseLayout>
      <AuthorLayout author={name}>
        <div className={styles.trackPageContentWrapper}>
          {/* <TrackAlbumPlaylistCover img={img} likes={'234324'} listening={'23423'} title={trackName} /> */}
          <TrackText />
          <Comments />
        </div>
      </AuthorLayout>
    </BaseLayout>
  );
};

export default TrackPage;
