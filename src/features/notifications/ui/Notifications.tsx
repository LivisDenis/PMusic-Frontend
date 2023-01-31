import profileLogo from '../../../shared/assets/png/profileLogo.png';
import { useUserInfoStore } from '../../../shared/store/UserInfoStore';
import { burger } from '../../../shared/const/importSvg';
import styles from './Notifications.module.scss';

export const Notifications = () => {
  const { userName } = useUserInfoStore((state) => state);
  return (
    <div className={styles.notificationWrapper}>
      <img src={burger} alt="" />
      <span className={styles.profileUsername}>{userName}</span>
      <img className={styles.profileAvatar} src={profileLogo} alt="" />
    </div>
  );
};

