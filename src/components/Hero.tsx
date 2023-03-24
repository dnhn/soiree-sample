import React, { useState } from 'react';
import {
  Button,
  Popover,
  Typography,
} from '@mui/material';

import css from './Hero.module.scss';

export default function Hero() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div
      className={`${css.Hero} relative h-[70vh] bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:z-0`}
      style={{backgroundImage: 'url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format,compress&w=1200&h-600&q=60)'}}
    >
      <Typography className="z-[1] font-extrabold tracking-tighter text-white" component="h1" variant="h2">Soirées</Typography>
      <Typography className="z-[1] font-bold text-gray-300" component="p">We capture the fun and protect your privacy.</Typography>
      <Button
        className="md:absolute max-md:top-[5%] max-md:right-auto max-md:bottom-auto max-md:left-auto md:top-[35%] md:right-[5%] md:bottom-[auto] md:left-[auto] z-[1] p-0 w-6 h-6 border-2 border-solid border-black border-opacity-50 rounded-full min-w-0 bg-white text-black font-bold lowercase"
        onClick={handleClick}
      >
        i
      </Button>
      <Popover
        id={id}
        className="mt-2"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        marginThreshold={50}
      >
        <div className="flex items-center gap-2 p-4">
          <div className="w-12 h-12">
            <img className="rounded-full w-full h-full" src="https://fastly.picsum.photos/id/980/48/48.webp?hmac=eoWJWp4-Jw7t9fCUXaB3lOx0nioRdbxfh6K4GgfLl-o" alt="" />
          </div>
          <div>
            <Typography className="text-gray-400 text-[14px] font-bold">Shot by</Typography>
            <Typography className="text-[14px]">Jamie Morris</Typography>
          </div>
        </div>
      </Popover>
    </div>
  );
};
