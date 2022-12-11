import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorContextProvider } from "../contexts/clipboard";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorContextProvider>
        <Component {...pageProps} />
      </ColorContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
