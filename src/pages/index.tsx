import Head from "next/head";
import ResponsiveDrawer from "~/components/drawer-layout/ResponsiveDrawerLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moneris T3 Demo</title>
        <meta name="description" content="Moneris T3 Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ResponsiveDrawer title="Moneris T3 Demo">
          <div>Home</div>
        </ResponsiveDrawer>
      </main>
    </>
  );
}
