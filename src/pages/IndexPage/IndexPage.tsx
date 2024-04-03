import { MouseEvent } from 'react';

import { Layout } from '@components/Layout';

import styles from './IndexPage.module.scss';

export const IndexPage = () => {
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <Layout>
      <div className={styles.introCard} onMouseMove={handleMouseMove}>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>LaExploradora.</h1>
          <p className={styles.subtitle}>Dmitry Nikulin, frontend developer.</p>
        </div>
      </div>
    </Layout>
  );
};
