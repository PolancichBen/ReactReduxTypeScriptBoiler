import React, { FC } from 'react';
import Chip, { ChipTypeMap } from '@mui/material/Chip';

const chipSx = {
  '&.MuiChip-root': {
    backgroundColor: 'white',
    color: 'black',
    padding: '0rem 0.5rem',
    margin: '0.25rem',
    borderRadius: '5px',
    fontSize: '14px',
  },
};

type ChipProps = ChipTypeMap['props'] & { label: string };

export const Tag: FC<ChipProps> = ({ label, ...rest }) => (
  <Chip sx={chipSx} label={label} {...rest} />
);
