import React from 'react';
import styles from './TrackProgressBar.module.scss'

export const TrackProgressBar = () => {
  return (
    <input className={`${styles.inputDuration} ${styles.sliderProgress}`} defaultValue={'0'} type="range" />
  );
};

