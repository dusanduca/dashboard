import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react"



export type NextPageWithLayout<P = {}, IP = P> = NextPage<PageTransitionEvent, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page:any) => page);
    return getLayout (<Component {...pageProps}/>);
}