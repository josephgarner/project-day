import Head from 'next/head';
import 'animate.css';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import { getDateOfWeek } from '@/util/dateUtil';

export default function Home() {
  const dayIs = getDateOfWeek();

  return (
    <div className={styles.container}>
      <Head>
        <title>Day by Day</title>
        <meta name="description" content="Simple life planner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`animate__animated animate__fadeIn animate__delay ${styles.main}`}
      >
        <h1 className={styles.title}>Welcome.</h1>
        <h1 className={styles.title}>Today is {dayIs}.</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.gnu.org/licenses/gpl-3.0.en.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Licensed under the GPL-3.0 License
        </a>
      </footer>
    </div>
  );
}
