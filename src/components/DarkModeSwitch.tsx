import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import react, { useEffect } from 'react';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  useEffect(() => {
    console.log('colorMode', colorMode);
    if (colorMode === 'light') {
      toggleColorMode();
    }
  }, []);
  return (
    <IconButton
      marginRight={4}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      colorScheme="gray"
      onClick={toggleColorMode}
    />
  );
};
