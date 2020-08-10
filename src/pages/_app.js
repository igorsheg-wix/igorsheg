import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import GlobalStyles from "../utils/globalStyles";
import Head from "next/head";
import { PAGE_META } from "../static/data";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{PAGE_META.title}</title>
        <meta name="description" content={PAGE_META.description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://rsms.me/inter/font-files/Inter-roman.var.woff2?3.13"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
