import { Flex, Spacer } from '@chakra-ui/react';
import { useColorMode, IconButton } from '@chakra-ui/react';

import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Github } from '../components/Github';
import { Logo } from '../components/Logo';

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Flex
      justifyContent="between"
      alignItems="center"
      position="fixed"
      top={0}
      width="full"
      height={16}
      backdropFilter="auto"
      backdropBlur="80px"
      boxShadow="sm"
    >
      <Logo />
      <Spacer />
      <Github />
      <DarkModeSwitch />
    </Flex>
  );
};
