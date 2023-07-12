import { style } from '@vanilla-extract/css';

export const linkStyle = style({
  color: 'inherit',
  textDecoration: 'none',
  ':hover': {
    color: 'inherit',
    textDecoration: 'none',
  },
  ':visited': {
    color: 'inherit',
    textDecoration: 'none',
  },
});
