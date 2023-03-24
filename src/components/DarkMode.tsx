import React, { Fragment, useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  useTheme,
} from '@mui/material';

import css from './DarkMode.module.scss';

export default function DarkMode(
  { className, toggleColorMode }:
  { className?: any, toggleColorMode: any }
) {
  const theme = useTheme();
  return (
    <FormControlLabel
      className={`m-0 ${className}`}
      control={
        <Checkbox
          className="hidden"
          checked={theme.palette.mode === 'dark' ? true : false}
          onChange={toggleColorMode}
        />}
      label={
        <div className={`${css.ThemeToggle} relative rounded-2xl h-[32px] p-2 bg-[#3c69f6] text-[0px]`}>
          <span className={`${theme.palette.mode === 'dark' ? css.ThemeToggleDark : ''}`}></span>
        </div>
      }
    />
  );
};
