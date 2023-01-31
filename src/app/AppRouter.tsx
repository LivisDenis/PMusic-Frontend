import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useUserInfoStore } from '../shared/store/UserInfoStore';
import {
  AUTHOR_ALBUM,
  AUTHOR_PROFILE,
  AUTHOR_SETTING,
  AUTHOR_TRACK,
  HOME,
  LOGIN,
  REGISTER, RELEASE, RELEASE_UPLOAD_TRACK, USER_SETTING,
} from '../shared/const/routes';
import Profile from '../pages/profile/ui/Profile/Profile';
import TrackUpload from '../pages/release/ui/TrackForm/TrackForm';
import AlbumUpload from '../pages/release/ui/AlbumForm/AlbumForm';
import AlbumPage from '../pages/albumPage/ui/AlbumPage/AlbumPage';
import TrackPage from '../pages/trackPage/ui/TrackPage/TrackPage';
import SignUp from '../pages/signUp/ui/SignUp/SignUp';
import SignIn from '../pages/signIn/ui/SignIn/SignIn';
import Home from '../pages/home/ui/Home/Home';

const AppRouter = () => {
  const { setAuth, setRole, setUserName, auth } = useUserInfoStore((state) => state);
  useEffect(() => {
    axios.post('http://localhost:5000/user/refresh', { reload: true }, { withCredentials: true }).then((res) => {
      if (res.data.isLogin) {
        setAuth(true);
        setRole(res.data.user.role);
        setUserName(res.data.user.userName);
      }
    });
  }, [auth]);

  return (
    <Routes>
      <Route path={HOME} element={<Home />} />

      <Route path={LOGIN} element={<SignIn />} />
      <Route path={REGISTER} element={<SignUp />} />

      <Route path={AUTHOR_PROFILE} element={<Profile />} />
      <Route path={AUTHOR_SETTING} element={<Profile />} />
      <Route path={AUTHOR_TRACK} element={<TrackPage />} />
      <Route path={AUTHOR_ALBUM} element={<AlbumPage />} />

      <Route path={RELEASE} element={<AlbumUpload />} />
      <Route path={RELEASE_UPLOAD_TRACK} element={<TrackUpload />} />

      {/* Страницы указаны некоректно */}
      {/* <Route path={AUTHOR_CABINET} element={<Profile />} /> */}
      <Route path={AUTHOR_PROFILE} element={<Profile />} />

      <Route path={USER_SETTING} element={<Profile />} />
      {/* <Route path={USER_TRACKS} element={<TracksUsers />} /> */}
      {/* <Route path={USER_ALBUMS} element={<AlbumsUsers />} /> */}
      {/* <Route path={USER_PLAYLIST} element={<Playlist />} /> */}
    </Routes>
  );
};

export default AppRouter;
