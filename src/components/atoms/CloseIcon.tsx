import React, { FC } from 'react';

interface CloseIconProps {
  color?: string;
  size?: string;
}

export const CloseIcon: FC<CloseIconProps> = ({ color, size }) => {
  return (
    <svg
      width={size ? size : '16'}
      height={size ? size : '16'}
      viewBox="0 0 12 12"
      fill={color ? color : 'black'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.42 0.92724L10.4921 0L5.71033 4.78243L0.927895 0L0 0.92724L4.78243 5.70967L0 10.4921L0.927895 11.4193L5.71033 6.63691L10.4921 11.4193L11.42 10.4921L6.63757 5.70967L11.42 0.92724Z"
      />
    </svg>
  );
};
