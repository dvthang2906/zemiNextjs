'use client';

import Container from 'react-bootstrap/Container';

import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderExample from "@/components/app.header";
import Content from '../components/app.table';
import FooterExample from '@/components/app.footer';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';



const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <Head>
        <link
          rel="icon"
          href="src\images\logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="src\images\logo.png"
        />
      </Head>
      <body className={inter.className}>

        <HeaderExample />

        <Container>
          {children}
        </Container>

        <FooterExample />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />


      </body>

    </html>
  )
}



