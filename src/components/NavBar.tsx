import { Flex, Spacer, Button } from '@chakra-ui/react';
import { useColorMode, IconButton } from '@chakra-ui/react';

import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Github } from '../components/Github';
import { Logo } from '../components/Logo';

import Link from "next/link"

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

      <Link href="/fuckAuditor">
        <Button marginRight={2} colorScheme='gray' variant='ghost'>
          累死那个审核员
        </Button>
      </Link>
      <Github />
      <DarkModeSwitch />
    </Flex>
  );
};
