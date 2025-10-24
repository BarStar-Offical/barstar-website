import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";

const BarStarApp = ({ Component, pageProps }: AppProps<{ session?: Session }>) => (
  <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export default BarStarApp;
