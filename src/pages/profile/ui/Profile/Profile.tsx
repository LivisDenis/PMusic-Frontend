import { ProfileLayout } from '../../../../layout';
import { SearchPanel } from '../../../../entities/search';
import { ProfileInfo } from '../../../../widgets/profileBlock';
import { SelectionFavourites } from '../../../../widgets/selectionFavorites';
import cover5 from '../../../../shared/assets/sidebar/playlist/cover5.png';
import styles from './Profile.module.scss';

const selectionList = [
  {
    header: 'Альбомы',
    tracksOrAlbums: 'albums',
    selection: [
      { author: 'Kizaru', albumName: 'Kizaru', cover: cover5 },
      { author: 'Kizaru', albumName: 'Foobar', cover: cover5 },
      { author: 'Kizaru', albumName: 'Toola', cover: cover5 },
      { author: 'Kizaru', albumName: '6Black', cover: cover5 },
      { author: 'Kizaru', albumName: 'Yanix', cover: cover5 },
      { author: 'Kizaru', albumName: 'Kiilo', cover: cover5 },
      { author: 'Kizaru', albumName: 'Kiilo', cover: cover5 },
    ],
  },
  {
    header: 'Самые залайканные альбомы',
    tracksOrAlbums: 'albums',
    selection: [
      { author: 'Kizaru', albumName: 'Kizaru', cover: cover5 },
      { author: 'Yanix', albumName: 'Foobar', cover: cover5 },
      { author: 'Snoop', albumName: 'Toola', cover: cover5 },
      { author: 'Cold', albumName: '6Black', cover: cover5 },
      { author: 'Kizaru', albumName: 'Yanix', cover: cover5 },
      { author: 'Kizaru', albumName: 'Kiilo', cover: cover5 },
      { author: 'Kizaru', albumName: 'Kiilo', cover: cover5 },
    ],
  },
  {
    header: 'Самые прослушиваемые треки',
    tracksOrAlbums: 'tracks',
    selection: [
      { author: 'Kizaru', trackName: 'Kizaru', albumName: 'Mas fuerte', cover: cover5 },
      { author: 'Kizaru', trackName: 'Foobar', albumName: 'AlbumForm', cover: cover5 },
      { author: 'Kizaru', trackName: 'Toola', albumName: 'Gooka', cover: cover5 },
      { author: 'Kizaru', trackName: '6Black', albumName: '6Black', cover: cover5 },
      { author: 'Kizaru', trackName: 'Yanix', albumName: 'Yanix', cover: cover5 },
      { author: 'Kizaru', trackName: 'Kiilo', albumName: 'Kiilo', cover: cover5 },
      { author: 'Kizaru', trackName: 'Kiilo', albumName: 'Kiilo', cover: cover5 },
    ],
  },
];

const Profile = () => {
  return (
    <ProfileLayout>
      <section className={styles.albums}>
        <SearchPanel />
        <SelectionFavourites selectionList={selectionList} />
      </section>
      <ProfileInfo />
    </ProfileLayout>
  );
};

export default Profile;
