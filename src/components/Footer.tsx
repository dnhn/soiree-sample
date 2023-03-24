import React from 'react';
import {
  Button,
  Container,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

import css from './Footer.module.scss';
import Logo from './Logo';

export default function Footer() {
  const theme = useTheme();

  return (
    <footer className={`${css.Footer} mt-16 ${theme.palette.mode === 'dark' ? 'text-gray-400' : 'text-gray-600' }`}>
      <Container maxWidth="lg">
        <div className="px-4 pt-4 pb-8 flex items-center justify-between">
          <div>
            <Logo colorMode={theme.palette.mode} />
            <div className="inline-block ml-6 text-[14px]">Soirées<br/>From Paris with ❤️</div>
          </div>
          <div>
            <a className={`no-underline font-bold text-[14px] ${theme.palette.mode === 'dark' ? 'text-gray-200' : 'text-gray-500' }`} href="#">Partner login</a>
            <Button className="max-lg:hidden ml-16 min-w-0 px-0 text-[24px]" variant="text">🇬🇧</Button>
          </div>
        </div>
        <div className="px-4 pb-12 flex max-lg:flex-col items-center justify-center lg:justify-between">
          <div>&copy; soire.es All rights reserved</div>
          <div className="lg:absolute left-1/2 lg:-translate-x-1/2 max-lg:mt-4">
            <a className={`no-underline ${theme.palette.mode === 'dark' ? 'text-gray-400' : 'text-gray-600' }`} href="#">Terms</a>
            <a className={`ml-4 no-underline ${theme.palette.mode === 'dark' ? 'text-gray-400' : 'text-gray-600' }`} href="#">Privacy Policy</a>
          </div>
          <div className="max-lg:mt-4 leading-[0]">
            <a
              className={`ml-4 inline-flex justify-center items-center rounded-full w-8 h-8 ${theme.palette.mode === 'dark' ? 'bg-white bg-opacity-5' : 'bg-[#3c69f6] bg-opacity-10'} text-[#8aaaf9]`}
              href="#"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a
              className={`ml-4 inline-flex justify-center items-center rounded-full w-8 h-8 ${theme.palette.mode === 'dark' ? 'bg-white bg-opacity-5' : 'bg-[#3c69f6] bg-opacity-10'} text-[#8aaaf9]`}
              href="#"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              className={`ml-4 inline-flex justify-center items-center rounded-full w-8 h-8 ${theme.palette.mode === 'dark' ? 'bg-white bg-opacity-5' : 'bg-[#3c69f6] bg-opacity-10'} text-[#8aaaf9]`}
              href="#"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              className={`ml-4 inline-flex justify-center items-center rounded-full w-8 h-8 ${theme.palette.mode === 'dark' ? 'bg-white bg-opacity-5' : 'bg-[#3c69f6] bg-opacity-10'} text-[#8aaaf9]`}
              href="#"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              className={`ml-4 inline-flex justify-center items-center rounded-full w-8 h-8 ${theme.palette.mode === 'dark' ? 'bg-white bg-opacity-5' : 'bg-[#3c69f6] bg-opacity-10'} text-[#8aaaf9]`}
              href="#"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
