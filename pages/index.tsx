import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import { MosaicTile } from "@prisma/client";
import GameBoard from "../components/GameBoard";

const Home: NextPage = () => {
  const fetcher: (url: RequestInfo) => Promise<any> = (url) =>
    fetch(url).then((r) => r.json());

  const { data, error } = useSWR<MosaicTile[]>("/api/tiles", fetcher, {
    revalidateIfStale: true,
    refreshInterval: 1000,
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Mosaic Game</title>
      </Head>

      <h1 className={styles.title}>Welcome to the Mosaic Game</h1>
      <main className={styles.main}>
        <GameBoard tiles={data} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://diginlab.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by&nbsp;
          <span className={styles.logo}>
            <Image
              src="/diginlab.png"
              alt="Diginlab Logo"
              width={60}
              height={30}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
