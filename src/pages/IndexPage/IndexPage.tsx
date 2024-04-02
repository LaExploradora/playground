import { Layout } from '@components/Layout';

import styles from './IndexPage.module.scss';

export const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.introCard}>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>LaExploradora.</h1>
          <p className={styles.subtitle}>Dmitry Nikulin, frontend developer.</p>
        </div>
      </div>
    </Layout>
  );
};
