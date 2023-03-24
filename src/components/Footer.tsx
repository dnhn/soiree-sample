import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material';
import { Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

import css from './Footer.module.scss';

import Logo from './Logo';

export default function Footer() {
  const theme = useTheme();

  return (
    <footer
      className={`${css.Footer} mt-16 ${
        theme.palette.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
      }`}
    >
      <Container maxWidth="lg">
        <div className="flex items-center justify-between px-4 pt-4 pb-8">
          <div>
            <Logo colorMode={theme.palette.mode} />
            <div className="ml-6 inline-block text-[14px]">
              Soirées
              <br />
              From Paris with ❤️
            </div>
          </div>
          <div>
            <a
              className={`text-[14px] font-bold no-underline ${
                theme.palette.mode === 'dark'
                  ? 'text-gray-200'
                  : 'text-gray-500'
              }`}
              href="#"
            >
              Partner login
            </a>
            <Button
              className="ml-16 min-w-0 px-0 text-[24px] max-lg:hidden"
              variant="text"
            >
              🇬🇧
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 pb-12 max-lg:flex-col lg:justify-between">
          <div>&copy; soire.es All rights reserved</div>
          <div className="left-1/2 max-lg:mt-4 lg:absolute lg:-translate-x-1/2">
            <a
              className={`no-underline ${
                theme.palette.mode === 'dark'
                  ? 'text-gray-400'
                  : 'text-gray-600'
              }`}
              href="#"
            >
              Terms
            </a>
            <a
              className={`ml-4 no-underline ${
                theme.palette.mode === 'dark'
                  ? 'text-gray-400'
                  : 'text-gray-600'
              }`}
              href="#"
            >
              Privacy Policy
            </a>
          </div>
          <div className="leading-[0] max-lg:mt-4">
            <a
              className={`ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full ${
                theme.palette.mode === 'dark'
                  ? 'bg-white bg-opacity-5'
                  : 'bg-[#3c69f6] bg-opacity-10'
              } text-[#8aaaf9]`}
              href="#"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              className={`ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full ${
                theme.palette.mode === 'dark'
                  ? 'bg-white bg-opacity-5'
                  : 'bg-[#3c69f6] bg-opacity-10'
              } text-[#8aaaf9]`}
              href="#"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              className={`ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full ${
                theme.palette.mode === 'dark'
                  ? 'bg-white bg-opacity-5'
                  : 'bg-[#3c69f6] bg-opacity-10'
              } text-[#8aaaf9]`}
              href="#"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              className={`ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full ${
                theme.palette.mode === 'dark'
                  ? 'bg-white bg-opacity-5'
                  : 'bg-[#3c69f6] bg-opacity-10'
              } text-[#8aaaf9]`}
              href="#"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              className={`ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full ${
                theme.palette.mode === 'dark'
                  ? 'bg-white bg-opacity-5'
                  : 'bg-[#3c69f6] bg-opacity-10'
              } text-[#8aaaf9]`}
              href="#"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
