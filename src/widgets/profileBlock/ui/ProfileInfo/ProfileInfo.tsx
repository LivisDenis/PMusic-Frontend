import React from 'react';
import styles from './ProfileInfo.module.scss';

const infoAuthor = [
  { text: 'Дата рождения:', value: '06.10.1987' },
  { text: 'Место рождения:', value: 'Санкт-Петербург' },
  { text: 'Дата регистрации:', value: '06.10.2019' },
  { text: 'Подписчики:', value: '8' },
  { text: 'Добавлений в избранное:', value: '325423' },
  { text: 'Прослушиваний:', value: '325423' },
  { text: 'Количество треков на площадке:', value: '124' },
  { text: 'Количество треков на площадке:', value: '325423' },
];

export const Info = () => {
  return (
    <ul>
      {infoAuthor.map(({ text, value }, i) => (
        <li key={i} className={styles.info}>
          <div>
            {text} <span>{value}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};