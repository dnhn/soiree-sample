import MenuIcon from '@mui/icons-material/Menu';
import { Button, Container, Drawer } from '@mui/material';
import React, { useState } from 'react';

import css from './Header.module.scss';

import DarkMode from './DarkMode';
import Logo from './Logo';

export default function Header({ toggleColorMode }: { toggleColorMode: any }) {
  const [menu, setMenu] = useState(false);

  return (
    <header className={`${css.Header} fixed top-0 left-0 right-0 z-[2] py-6`}>
      <Container maxWidth="lg">
        <div className="flex items-center justify-between">
          <Logo />
          <div>
            <DarkMode
              className="max-lg:hidden"
              toggleColorMode={toggleColorMode}
            />
            <Button
              className="ml-6 rounded-lg font-bold normal-case max-lg:hidden"
              variant="contained"
              href="#"
            >
              I’m a photographer
            </Button>
            <Button
              className="ml-4 rounded-lg font-bold normal-case max-lg:hidden"
              variant="contained"
              href="#"
            >
              I’m a partner
            </Button>
            <Button
              className="text-white"
              onClick={() => setMenu(!menu)}
              aria-label="Menu"
            >
              <MenuIcon />
            </Button>
          </div>
        </div>
      </Container>
      <Drawer
        anchor="right"
        open={menu}
        onClose={() => setMenu(!menu)}
        container={document.getElementById('root')}
      >
        <div className="flex h-full flex-col justify-between px-4 pt-8 pb-4">
          <div>
            <Button
              className="block rounded-lg bg-white font-bold normal-case text-black"
              variant="contained"
              href="#"
            >
              I’m a photographer
            </Button>
            <Button
              className="mt-4 block rounded-lg bg-white font-bold normal-case text-black"
              variant="contained"
              href="#"
            >
              I’m a partner
            </Button>
          </div>
          <div>
            <DarkMode toggleColorMode={toggleColorMode} />
            <Button className="ml-16 min-w-0 px-0 text-[24px]" variant="text">
              🇬🇧
            </Button>
          </div>
        </div>
      </Drawer>
    </header>
  );
}
