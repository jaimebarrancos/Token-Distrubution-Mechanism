import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import { useMoralis } from "react-moralis"
import Header from "../../components/header"
import Join from "../../components/join"
import MainGrid from "../../components/content"
import Footer from "../../components/footer"
import UpperGrid from "../../components/upper-grid"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>token distribution mechanism</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <UpperGrid />
        <MainGrid />
        <Footer />
      </div>
    </>
  )
}
