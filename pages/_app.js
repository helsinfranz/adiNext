import Darkheader from "@/component/header/darkheader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Darkheader check={true} />
      <Component {...pageProps} />
    </>
  );
}
