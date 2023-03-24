import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import {
  Button,
  Container,
  CssBaseline,
  PaletteMode,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import React, {
  createContext,
  Fragment,
  useContext,
  useMemo,
  useState,
} from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

const rootElement = document.getElementById('root');
const ColorModeContext = createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode: PaletteMode) => ({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
  palette: {
    mode,
    primary: {
      main: '#3c69f6',
    },
    ...(mode === 'dark'
      ? {
          background: {
            default: '#171c23',
          },
          text: {
            primary: '#fff',
          },
        }
      : {}),
  },
  typography: {
    fontFamily: '"Merriweather Sans", sans-serif',
  },
});

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Fragment>
      <Header toggleColorMode={colorMode.toggleColorMode} />
      <Hero />
      <Container maxWidth="lg">
        <div className="mt-12 flex justify-between rounded-2xl bg-[#232a35] px-10 py-16 max-md:flex-col max-md:p-8 md:items-center">
          <Typography
            className="font-bold tracking-tight text-white max-md:text-[32px]"
            component="h2"
            variant="h3"
          >
            Find My Pictures
          </Typography>
          <Button
            className="h-12 rounded-md font-bold normal-case max-md:mt-8 max-md:w-full md:min-w-[150px]"
            variant="contained"
          >
            Go <ArrowForwardIcon className="ml-2" />
          </Button>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default function themeApp() {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
