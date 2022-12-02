import { Flex, Heading } from '@chakra-ui/react';

export const Hero = ({ title,size }: { title: string,size:string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="40vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading fontSize={size}>{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: '声明',
  size: '6xl'
};
