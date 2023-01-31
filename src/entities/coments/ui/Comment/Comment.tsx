import img from '../../../../shared/assets/sidebar/playlist/cover5.png';
import like from '../../../../shared/assets/svg/like.svg';
import styles from './Comment.module.scss';

// interface IComment {
//   author: string;
//   commentText: string;
//   timeAgo: number;
// }

export const Comment = () => {
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentAuthorWrapper}>
        <img className={styles.imgAuthor} src={img} alt="img" />
        <span className={styles.author}>Metro4akin</span>
      </div>
      <div className={styles.commentTextWrapper}>
        <p className={styles.commentText}>
          Братан, хорош, давай, давай, вперёд! Контент в кайф, можно ещё? Вообще красавчик! Можно вот этого вот почаще?
        </p>
        <div className={styles.likeWrapper}>
          <span className={styles.time}>3 ч.</span>
          <img src={like} className={styles.likeIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

