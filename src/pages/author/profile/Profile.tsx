import ProfileLayout from '../../../components/layouts/profileLayout/ProfileLayout';
import { SearchPanel } from '../../../components/searchPanel/SearchPanel';
import styles from './Profile.module.scss';
import ProfileInfo from '../../../components/profileInfo/ProfileInfo';
import { Selections } from '../../../components/selections/Selections';
import cover5 from '../../../assets/sidebar/playlist/cover5.png';

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
      { author: 'Kizaru', trackName: 'Foobar', albumName: 'Album', cover: cover5 },
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
        <Selections selectionList={selectionList} />
      </section>
      <ProfileInfo />
    </ProfileLayout>
  );
};

export default Profile;
