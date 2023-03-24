import React, {
  Fragment,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  Button,
  Container,
  CssBaseline,
  PaletteMode,
  Typography,
} from '@mui/material';
import {
  useTheme,
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

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
      main: '#3c69f6'
    },
    typography: {
      fontFamily: '"Merriweather Sans", sans-serif',
    },
    ...(mode === 'dark'
      ? {
          background: {
            default: '#171c23'
          },
          text: {
            primary: '#fff',
          },
        }
      : {
        }),
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
        <div className="mt-12 flex max-md:flex-col justify-between md:items-center rounded-2xl max-md:p-8 px-10 py-16 bg-[#232a35]">
          <Typography
            className="max-md:text-[32px] font-bold tracking-tight text-white"
            component="h2"
            variant="h3"
          >
            Find My Pictures
          </Typography>
          <Button className="max-md:mt-8 max-md:w-full rounded-md md:min-w-[150px] h-12 font-bold normal-case" variant="contained">Go <ArrowForwardIcon className="ml-2" /></Button>
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
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
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
};
