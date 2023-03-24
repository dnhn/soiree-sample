import React, { Fragment, useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  useTheme,
} from '@mui/material';

import css from './DarkMode.module.css';

export default function DarkMode(
  { className, toggleColorMode }:
  { className?: any, toggleColorMode: any }
) {
  const theme = useTheme();
  return (
    <FormControlLabel
      className={`${css.Label} ${className}`}
      control={
        <Checkbox
          className={css.Checkbox}
          checked={theme.palette.mode === 'dark' ? true : false}
          onChange={toggleColorMode}
        />}
      label={
        <div className={`${css.ThemeToggle}`}>
          <span className={`${theme.palette.mode === 'dark' ? css.ThemeToggleDark : ''}`}></span>
        </div>
      }
    />
  );
};
