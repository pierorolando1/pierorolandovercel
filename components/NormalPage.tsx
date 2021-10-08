import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Navbar from './Navbar/Navbar'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import NProgress from "nprogress";
import nProgress from "nprogress";
import Footer from './Footer/Footer';
import LoadingOverlay from 'react-loading-overlay'
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { PacmanLoader } from 'react-spinners';

export const NormalPage = ({ children, title, footer = true, navbar = true }) => {

  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const { modalOpen } = useSelector((state:any) => state.modal)

  useEffect(() => {
      const handleRouteChange = (url) => {
          console.log(url);
          setLoading(true)
          NProgress.start();
      };

      router.events.on("routeChangeStart", handleRouteChange);

      router.events.on("routeChangeComplete", () => {
        NProgress.done()
        setLoading(false)
      });

      router.events.on("routeChangeError", () => {
        nProgress.done()
        setLoading(false)
      });

      return () => {
          router.events.off("routeChangeStart", handleRouteChange);
      };
  }, []);

  return (

    <>
      <Head>
        <title>{ title } | Piero Rolando</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css" integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY=" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
          />

      </Head>
      
      {/* <LoadingOverlay>  
      </LoadingOverlay> */}
      {/* loading ?
        <motion.div initial={{translateX: '100%'}} animate={{translateX: '0%'}} exit={{translateX: '100%'}} className="h-screen w-full bg-gray-dark-2 fixed flex justify-center items-center" style={{zIndex: 1000000000}}>
          <PacmanLoader color="rgb(29, 78, 216)" />
        </motion.div>
        : <></>
      */}

      {
      navbar &&
      <Navbar />
      }

      { 
        children
      }
      {
        footer ? <Footer /> : <></>
      }
      
    </>
  )
}
