import Head from "next/head";
import ResponsiveDrawer from "~/components/drawer-layout/ResponsiveDrawerLayout";
import { env } from "~/env.mjs";

export default function Home() {
  console.info("load index.tsx", env.NEXT_PUBLIC_MONERIS_JS_URL);

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
