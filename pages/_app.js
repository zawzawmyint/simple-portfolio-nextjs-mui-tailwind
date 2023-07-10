import "@/styles/globals.css";
import Layout from "./Layout";
import { useNProgress } from "@/src/hooks/use-nprogress";
import { ThemeProvider } from "@emotion/react";
import { themeSettings } from "@/styles/theme";
import { useMemo, useState } from "react";
import { createTheme } from "@mui/material";

export default function App({ Component, pageProps }) {
  const mode = useState();
  const theme = useMemo(() => createTheme(themeSettings()), [mode]);
  useNProgress();
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
