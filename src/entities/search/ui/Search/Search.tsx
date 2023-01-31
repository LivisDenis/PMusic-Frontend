import { useState } from 'react';
import { search, stick } from '../../../../shared/const/importSvg';
import styles from './Search.module.scss';

const SearchPanel = () => {
  const [value, setValue] = useState<string>();

  return (
    <div className={styles.searchPanelWrapper}>
      <img className={styles.stickIcon} src={stick} alt="" />
      <img className={styles.searchIcon} src={search} alt="" />
      <span className={styles.searchHistory}>История поиска</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Трек, исполнитель или альбом"
        className={styles.searchPanel}
      />
    </div>
  );
};

export { SearchPanel };
