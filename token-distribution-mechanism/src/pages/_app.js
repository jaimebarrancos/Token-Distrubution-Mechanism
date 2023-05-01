import "@/styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import { Routes, Route } from "react-router-dom"
import About from "./about.js"
import "components/grid-style/gridcontent.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <MoralisProvider initializeOnMount={false}>
        <NotificationProvider>
          <Component {...pageProps} />
        </NotificationProvider>
      </MoralisProvider>
    </>
  )
}
