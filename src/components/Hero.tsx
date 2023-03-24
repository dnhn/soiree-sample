import { Info as InfoIcon } from '@mui/icons-material';
import { Button, ClickAwayListener, Tooltip, Typography } from '@mui/material';
import React from 'react';

import css from './Hero.module.scss';

export default function Hero() {
  const [tooltip, setTooltip] = React.useState(false);

  const handleTooltipClose = () => {
    setTooltip(false);
  };

  const toggleTooltip = () => {
    setTooltip(!tooltip);
  };

  return (
    <div
      className={`${css.Hero} relative flex h-[70vh] flex-col items-center justify-center bg-cover bg-center bg-no-repeat after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:z-0 after:content-['']`}
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format,compress&w=1200&h-600&q=60)',
      }}
    >
      <Typography
        className="z-[1] font-extrabold tracking-tighter text-white"
        component="h1"
        variant="h2"
      >
        Soirées
      </Typography>
      <Typography className="z-[1] font-bold text-gray-300" component="p">
        We capture the fun and protect your privacy.
      </Typography>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          className="z-[1]"
          placement="bottom"
          PopperProps={{
            disablePortal: true,
          }}
          arrow
          open={tooltip}
          title={
            <div className="flex items-center gap-2 p-2">
              <div className="h-12 w-12">
                <img
                  className="h-full w-full rounded-full"
                  src="https://fastly.picsum.photos/id/980/48/48.webp?hmac=eoWJWp4-Jw7t9fCUXaB3lOx0nioRdbxfh6K4GgfLl-o"
                  alt=""
                />
              </div>
              <div>
                <Typography className="text-[14px] font-bold text-gray-400">
                  Shot by
                </Typography>
                <Typography className="text-[14px]">Jamie Morris</Typography>
              </div>
            </div>
          }
        >
          <Button
            className="z-[1] h-6 w-6 min-w-0 rounded-full border-2 border-solid border-white border-opacity-50 bg-black p-0 text-white max-md:top-[5%] max-md:right-auto max-md:bottom-auto max-md:left-auto md:absolute md:top-[35%] md:right-[5%] md:bottom-[auto] md:left-[auto]"
            onClick={toggleTooltip}
          >
            <InfoIcon className="h-6 w-6" />
          </Button>
        </Tooltip>
      </ClickAwayListener>
    </div>
  );
}
