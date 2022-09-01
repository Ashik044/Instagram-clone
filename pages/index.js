import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";

import logo from "../assets/Instagram_logo.svg";

import { signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Instagram Clone</title>
        <meta name="description" content="Instagram Clone" />
        <meta
          name="google-site-verification"
          content="Azk6gREiGg74zSlqk5FnehHBJFYXdlnCCHJblEvi3wo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <div className={styles.container_full}>
        <div className={styles.mainPage}>
          <Image
            src={logo}
            alt="instagram logo"
            height={300}
            width={300}
            className={styles.instalogo}
          />
        </div>

        {!session && (
          <div className={styles.beforeSignin}>
            <button className={styles.signinBtn} onClick={signIn}>
              Please Continue to Sign In
            </button>
          </div>
        )}
      </div>
      {session && <Header />}

      {/*Feed*/}
      {session && <Feed />}

      {/*Model*/}
    </div>
  );
}
