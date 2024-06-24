import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { useAppDispatch } from '../store';
// import { setPWASliderBar } from '../store/site';

import { addLocalStorageItem, getLocalStorageItem } from './localStorage';
import { Typography } from '@mui/material';
// import { orangeMain } from '../constants/colors';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;

  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;

  /**
   * Allows a developer to show the install prompt at a time of their own choosing.
   * This method returns a Promise.
   */
  prompt(): Promise<void>;
}

/**
 * Chrome and Edge on iOS and iPadOS do not support PWA installation,
 * so the beforeinstallprompt event can't fire.
 */
let deferredPromptEvent: BeforeInstallPromptEvent | null = null;
// This variable will save the event for later use.
window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt fired');
  // Prevents the default mini-infobar or install dialog from appearing on mobile
  e.preventDefault();
  // Save the event because you'll need to trigger it later.
  deferredPromptEvent = e as BeforeInstallPromptEvent;
  addLocalStorageItem('canInstallAsApp', true);
});

export const handleMobilePWAPrompt = async (cb: () => void) => {
  const hasAlreadyPrompted = getLocalStorageItem('hasBeenPWAPrompted');
  const canInstallAsApp = getLocalStorageItem('canInstallAsApp');
  const hasPWABeenInstalled = getLocalStorageItem('hasPWABeenInstalled');
  if (
    deferredPromptEvent &&
    !hasAlreadyPrompted &&
    !hasPWABeenInstalled &&
    canInstallAsApp
  ) {
    addLocalStorageItem('hasBeenPWAPrompted', true);
    // Show the install prompt
    deferredPromptEvent.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPromptEvent.userChoice;

    if (outcome === 'accepted') {
      addLocalStorageItem('hasPWABeenInstalled', true);
      console.log('User accepted the install prompt');
    } else {
      addLocalStorageItem('hasPWABeenInstalled', false);
      console.log('User dismissed the install prompt');
    }

    cb();
  }
};

const buttonSx = {
  color: 'black',
  backgroundColor: 'white',
  fontWeight: 700,
  fontFamily: 'Montserrat, sans-serif',
  transition: 'all 0.25s ease-in-out',
  width: '100%',

  '&:hover': {
    transform: 'scale(1.04, 1.02)',
    boxShadow: '5px 5px 10px rgba(189, 195, 199, 1)',
    backgroundColor: 'white',
  },
};

export const PWAPromptMenu: FC = () => {
  const dispatch = useAppDispatch();

  const handleInstall = () =>
    handleMobilePWAPrompt(() => {
      // dispatch(setPWASliderBar(false));
    });

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <Typography variant="body1" sx={{ margin: '10px' }}>
        Would you like to install LeadSnare as an app?
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleInstall}
        sx={buttonSx}
      >
        Install App
      </Button>
    </Paper>
  );
};
