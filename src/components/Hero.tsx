import React from 'react';
import {
  Button,
  ClickAwayListener,
  Tooltip,
  Typography,
} from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';

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
      className={`${css.Hero} relative h-[70vh] bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:z-0`}
      style={{backgroundImage: 'url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format,compress&w=1200&h-600&q=60)'}}
    >
      <Typography className="z-[1] font-extrabold tracking-tighter text-white" component="h1" variant="h2">Soirées</Typography>
      <Typography className="z-[1] font-bold text-gray-300" component="p">We capture the fun and protect your privacy.</Typography>
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
              <div className="w-12 h-12">
                <img className="rounded-full w-full h-full" src="https://fastly.picsum.photos/id/980/48/48.webp?hmac=eoWJWp4-Jw7t9fCUXaB3lOx0nioRdbxfh6K4GgfLl-o" alt="" />
              </div>
              <div>
                <Typography className="text-gray-400 text-[14px] font-bold">Shot by</Typography>
                <Typography className="text-[14px]">Jamie Morris</Typography>
              </div>
            </div>
          }
        >
          <Button
            className="md:absolute max-md:top-[5%] max-md:right-auto max-md:bottom-auto max-md:left-auto md:top-[35%] md:right-[5%] md:bottom-[auto] md:left-[auto] z-[1] p-0 border-2 border-solid w-6 h-6 border-white border-opacity-50 rounded-full min-w-0 bg-black text-white"
            onClick={toggleTooltip}
          >
            <InfoIcon className="w-6 h-6" />
          </Button>
        </Tooltip>
      </ClickAwayListener>
    </div>
  );
};
