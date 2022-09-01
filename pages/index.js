import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";

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

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossorigin="anonymous"
        ></link>
      </Head>
      {/*Header*/}
      {!session && (
        <div className={styles.beforeSignin}>
          <button className={styles.signinBtn} onClick={signIn}>
            Please Continue to Sign In
          </button>
        </div>
      )}
      {session && <Header />}

      {/*Feed*/}
      {session && <Feed />}

      {/*Model*/}
    </div>
  );
}
