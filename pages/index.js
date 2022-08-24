import Head from "next/head";
import Header from "./component/Header";
import Feed from "./component/Feed";

function Home() {
  return (
    <div className="">
      <Head>
        <title>Instragram 2.0</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* feed */}
      <Feed />

      {/*  */}
    </div>
  );
}

export default Home;
