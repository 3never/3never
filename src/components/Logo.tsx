import { Image } from '@chakra-ui/react';
import { useColorMode, IconButton } from '@chakra-ui/react';

export const Logo = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Image
      width={20}
      marginLeft={4}
      objectFit="fill"
      alt="Dan Abramov"
      src={
        isDark
          ? 'https://i2.100024.xyz/2022/11/24/iixdu8.svg'
          : 'https://i2.100024.xyz/2022/11/24/iixfi6.svg'
      }
    />
  );
};
