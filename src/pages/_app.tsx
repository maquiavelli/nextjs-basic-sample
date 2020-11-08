import GlobalStyles from "../styles/GlobalStyle";
import GlobalStyle from '../styles/GlobalStyle'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
