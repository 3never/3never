import {
  Link as ChakraLink,
  Text,
  Code,
  Flex,
  Image as ChakraImage,
  Box,
  Button,
  Input,
  Spacer,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { NavBar } from '../components/NavBar';
import { MyDate } from '../components/MyDate';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const Index = () => {
  const capture = () => {
    const canvas1 = document.createElement('canvas');
    canvas1.width = 540;
    canvas1.height = 960;
    let context1 = canvas1.getContext('2d');
    context1.rect(0, 0, canvas1.width, canvas1.height);
    context1.fillStyle = '#fff';
    context1.fill();
    var myImage = new Image();
    myImage.src = 'https://i2.100024.xyz/2022/11/24/mees05.webp'; //背景图片 你自己本地的图片或者在线图片
    myImage.crossOrigin = 'Anonymous';
    myImage.onload = function () {
      context1.drawImage(myImage, 0, 0, 540, 960);
      const dataImg = new Image();
      dataImg.src = canvas1.toDataURL('image/png');
      const alink = document.createElement('a');
      alink.href = dataImg.src;
      alink.download = 'testImg.png';
      alink.click();
    };
  };
  return (
    <Container height="200vh">
      <Hero />
      <Main>
        <Box style={{ textIndent: 60 }}>
          <Text color="text" fontSize="3xl" as="b">
            本人
            <Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
              从未
            </Code>
            参与过任何社区居委会或村委会主任、副主任、委员的选举，
            <Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
              从未
            </Code>
            参与过基层人大代表的选举，
            <Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
              从未
            </Code>
            向任何级别人大代表反映过意见和要求。
          </Text>
          <Flex marginTop={12} alignItems="center">
            <Flex flexDirection="column">
              <Input
                color="gray"
                fontSize="2xl"
                variant="unstyled"
                placeholder="署名"
                width={32}
              />
              <MyDate />
            </Flex>

            <Spacer />
            <Flex flexDirection="column">
              <ChakraImage
                boxSize="48px"
                src="https://i2.100024.xyz/2022/11/24/iixh8a.svg"
                alt="qrcode"
              />
            </Flex>
          </Flex>
        </Box>
        <Flex paddingTop={8} justifyContent="center">
          <Button width={28} colorScheme="gray" onClick={capture}>
            一键声明
          </Button>
        </Flex>

        {/* <Text color="text">
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
          <Code>TypeScript</Code>.
        </Text>
  
        <List spacing={3} my={0} color="text">
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://chakra-ui.com"
              flexGrow={1}
              mr={2}
            >
              Chakra UI <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
              Next.js <LinkIcon />
            </ChakraLink>
          </ListItem>
        </List> */}
      </Main>

      <NavBar />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
      {/* <CTA /> */}
      {/* <canvas id="customCanvas" width={540} height={960}></canvas> */}
    </Container>
  );
};

export default Index;
