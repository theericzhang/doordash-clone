import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="preload"
                    href="/fonts/TTNorms/TTNorms-Heavy.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/TTNorms/TTNorms-Black.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/TTNorms/TTNorms-ExtraBold.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/TTNorms/TTNorms-Bold.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/TTNorms/TTNorms-Medium.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/TTNorms/TTNorms-Light.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/TTNorms/TTNorms-ExtraLight.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/TTNorms/TTNorms-Thin.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin=""
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
