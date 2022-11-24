import { useColorMode, IconButton } from '@chakra-ui/react';
import { GoMarkGithub } from 'react-icons/go';

export const Github = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const openGithub = () => {
    window.open('https://github.com/3never/3never'); //这里是打开新窗口
  };
  return (
    <IconButton
      marginRight={2}
      icon={isDark ? <GoMarkGithub /> : <GoMarkGithub />}
      aria-label="Toggle Theme"
      colorScheme="gray"
      onClick={openGithub}
    />
  );
};
