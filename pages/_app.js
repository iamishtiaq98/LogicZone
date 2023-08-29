import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import { ThemeProvider, createTheme } from '@mui/material';

function App({ Component, pageProps }) {
  const theme = createTheme()
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>

  )
}
export default App