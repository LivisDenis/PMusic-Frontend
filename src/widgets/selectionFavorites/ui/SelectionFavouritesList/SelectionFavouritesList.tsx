import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ISelectionItem } from '../../types';
import { AlbumOrTrackCover } from '../../../../entities/albumOrTrackCover';
import styles from './SelectionFavouritesList.module.scss';

interface ISelectionList {
  category: string;
  selection: ISelectionItem[];
}

export const SelectionFavouriteList = ({ category, selection }: ISelectionList) => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [arrLength, setArrLength] = useState(3);
  const [more, setMore] = useState(false);

  const showMore = () => {
    setArrLength(selection.length);
    setMore(true);
  };

  const showLess = () => {
    setArrLength(3);
    setMore(false);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.titleBlock}>
        <h2>{category}</h2>
        {!more ? (
          <button type="button" onClick={showMore}>
            Показать все
          </button>
        ) : (
          <button type="button" onClick={showLess}>
            Скрыть
          </button>
        )}
      </div>
      <ul className={styles.list}>
        {selection
          .map((item: ISelectionItem) => (
            <li
              key={item.cover}
              onClick={() =>
                navigate(
                  item.trackName
                    ? `/author/${name}/tracks/${item.trackName.toLowerCase()}`
                    : `/author/${name}/albums/${item.albumName.toLowerCase()}`,
                )
              }
            >
              <AlbumOrTrackCover
                cover={item.cover}
                albumName={item.albumName}
                trackName={item.trackName}
                author={item.author}
              />
            </li>
          ))
          .slice(0, arrLength)}
      </ul>
    </section>
  );
};

