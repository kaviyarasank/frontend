import React from "react";
import { AppProps } from "next/app";
import "../app/globals.css";
import Layout from "@/components/layout";


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;