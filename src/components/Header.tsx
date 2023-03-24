import React, { useState } from 'react';
import {
  Button,
  Container,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import css from './Header.module.css';

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
      >
        <div className={css.Drawer}>
          <div>
            <Button className={css.Drawer_Button} variant="contained" href="#">I’m a photographer</Button>
            <Button className={css.Drawer_Button} variant="contained" href="#">I’m a partner</Button>
          </div>
          <div>
            <DarkMode toggleColorMode={toggleColorMode} />
            <Button className={css.Drawer_Language} variant="text">🇬🇧</Button>
          </div>
        </div>
      </Drawer>
    </header>
  );
};
