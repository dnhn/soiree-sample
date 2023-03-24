import React, { useState } from 'react';
import {
  Button,
  Container,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import css from './Header.module.scss';

import Logo from './Logo';
import DarkMode from './DarkMode';

export default function Header({ toggleColorMode }: { toggleColorMode: any }) {
  const [menu, setMenu] = useState(false);

  return (
    <header className={`${css.Header} fixed top-0 left-0 right-0 z-[2] py-6`}>
      <Container maxWidth="lg">
        <div className="flex justify-between items-center">
          <Logo />
          <div>
            <DarkMode
              className="max-lg:hidden"
              toggleColorMode={toggleColorMode}
            />
            <Button className="max-lg:hidden ml-6 rounded-lg font-bold normal-case" variant="contained" href="#">I’m a photographer</Button>
            <Button className="max-lg:hidden ml-4 rounded-lg font-bold normal-case" variant="contained" href="#">I’m a partner</Button>
            <Button className="text-white" onClick={() => setMenu(!menu)} aria-label="Menu"><MenuIcon /></Button>
          </div>
        </div>
      </Container>
      <Drawer
        anchor="right"
        open={menu}
        onClose={() => setMenu(!menu)}
        container={document.getElementById('root')}
      >
        <div className="flex flex-col justify-between h-full pt-8 px-4 pb-4">
          <div>
            <Button className="block rounded-lg font-bold normal-case bg-white text-black" variant="contained" href="#">I’m a photographer</Button>
            <Button className="mt-4 block rounded-lg font-bold normal-case bg-white text-black" variant="contained" href="#">I’m a partner</Button>
          </div>
          <div>
            <DarkMode toggleColorMode={toggleColorMode} />
            <Button className="ml-16 min-w-0 px-0 text-[24px]" variant="text">🇬🇧</Button>
          </div>
        </div>
      </Drawer>
    </header>
  );
};
