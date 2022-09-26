import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Stopwatch from "../components/Stopwatch";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center bg-purple-700">
      <Head>
        <title>Welcome to TimeBlock!</title>
        <meta
          name="description"
          content="Chunk your day into productive 30 minute segments with TimeBlock. No ads, no accounts, no subscriptions, just TimeBlocking!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full px-2">
        <Navigation />

        <Stopwatch />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
