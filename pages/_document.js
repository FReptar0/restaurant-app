import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <link href="/favicon.png" rel="shortcut icon" type="image/x-icon"></link>
            </Head>
            <Main />
            <NextScript />
        </Html>
    )
}