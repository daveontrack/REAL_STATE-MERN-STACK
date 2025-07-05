// import Router from "next/router";
// import Head from "next/head";
// import NProgress from "nprogress";
// import { ChakraProvider } from "@chakra-ui/react";

// import Layout from "../components/Layout";

// function MyApp({ Component, pageProps }) {
//   NProgress.configure({ showSpinner: false });

//   Router.events.on("routeChangeStart", () => {
//     NProgress.start();
//   });

//   Router.events.on("routeChangeComplete", () => {
//     NProgress.done();
//   });

//   return (
//     <>
//       <Head>
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
//           integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
//           crossOrigin="anonymous"
//           referrerPolicy="no-referrer"
//         />
//       </Head>
//       <ChakraProvider>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </ChakraProvider>
//     </>
//   );
// }

// export default MyApp;
// import { useEffect } from "react";
// import Router from "next/router";
// import { ChakraProvider } from "@chakra-ui/react";
// import Layout from "../components/Layout";
// import "nprogress/nprogress.css";

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     // Dynamically import nprogress on client side only
//     const loadNProgress = async () => {
//       const NProgress = await import("nprogress");
//       NProgress.configure({ showSpinner: false });

//       const handleStart = () => NProgress.start();
//       const handleDone = () => NProgress.done();

//       Router.events.on("routeChangeStart", handleStart);
//       Router.events.on("routeChangeComplete", handleDone);
//       Router.events.on("routeChangeError", handleDone);

//       return () => {
//         Router.events.off("routeChangeStart", handleStart);
//         Router.events.off("routeChangeComplete", handleDone);
//         Router.events.off("routeChangeError", handleDone);
//       };
//     };

//     loadNProgress();
//   }, []);

//   return (
//     <ChakraProvider>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </ChakraProvider>
//   );
// }

// export default MyApp;

import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

// Import Chakra UI theme (you can create a basic theme if you don't have one)
import { extendTheme } from "@chakra-ui/react";

// Create or extend your theme
const theme = extendTheme();

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

// npm install next@latest @chakra-ui/react@latest @emotion/react@latest @emotion/styled@latest framer-motion@latest nprogress@latest
//npm install next react react-dom
//npm install
//npm install -g next
// npm run dev
//npm run build
//npm run start
