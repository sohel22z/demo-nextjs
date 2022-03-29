import React from "react"
import Head from "next/head";
import "popper.js"
import "../styles/styles.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <script defer src="https://cdn.jsdelivr.net/npm/lazyload@2.0.0-rc.2/lazyload.js"></script>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

