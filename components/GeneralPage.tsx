import Head from 'next/head';
import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import NProgress from 'nprogress';
import React, { useEffect } from 'react'

export const GeneralPage = ({children}) => {

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            console.log(url);
            NProgress.start();
        };
  
        router.events.on("routeChangeStart", handleRouteChange);
  
        router.events.on("routeChangeComplete", () => NProgress.done());
  
        router.events.on("routeChangeError", () => nProgress.done());
  
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);

    return (
        <>
        <Head>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
        </Head>
        {
            children
        }
        </>
    )
}
