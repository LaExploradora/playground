import { Navbar } from '../Navbar';
import styles from './Layout.module.scss';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
};
