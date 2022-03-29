import React from "react"
import Head from "next/head";
import "popper.js"
import "../styles/styles.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>IT Services & Software Solution – EurecaApps</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <script defer src="https://cdn.jsdelivr.net/npm/lazyload@2.0.0-rc.2/lazyload.js"></script>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

