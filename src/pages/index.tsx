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
  useToast,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { NavBar } from '../components/NavBar';
import { MyDate } from '../components/MyDate';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
const moment = require('moment');

import react, { useState } from 'react';

const Index = () => {
  const toast = useToast();
  const date = moment().format('YYYY年MM月DD日');
  const [署名, set署名] = useState('');
  const onChange = (e) => {
    set署名(e.target.value);
  };
  const capture = () => {
    if (署名 == '') {
      toast({
        title: `请先署名`,
        status: 'error',
        isClosable: true,
      });
      return;
    }
    const canvas1 = document.createElement('canvas');
    canvas1.width = 540;
    canvas1.height = 960;
    let context1 = canvas1.getContext('2d');
    context1.rect(0, 0, canvas1.width, canvas1.height);
    context1.fillStyle = '#939498';
    context1.fill();
    var myImage = new Image();
    myImage.src = '/template.png'; //背景图片 你自己本地的图片或者在线图片
    myImage.crossOrigin = 'Anonymous';

    myImage.onload = function () {
      context1.drawImage(myImage, 0, 0, 540, 960);
      context1.font = '20px Outfit';
      context1.fillText(署名, 320, 560);
      context1.fillText(date, 320, 590);
      const dataImg = new Image();
      dataImg.src = canvas1.toDataURL('image/png');
      const alink = document.createElement('a');
      alink.href = dataImg.src;
      alink.download = '声明.png';
      alink.click();
    };
  };
  return (
    <Container>
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
          <Flex marginTop={12}>
            <Spacer />
            <Flex flexDirection="column">
              <Input
                color="gray"
                fontSize="2xl"
                variant="unstyled"
                placeholder="署名"
                width={32}
                onChange={onChange}
              />
              <MyDate />
            </Flex>

            {/* <Spacer />
            <Flex flexDirection="column">
              <ChakraImage
                boxSize="48px"
                src="https://i2.100024.xyz/2022/11/24/iixh8a.svg"
                alt="qrcode"
              />
            </Flex> */}
          </Flex>
        </Box>
        <Flex paddingTop={8} justifyContent="center">
          <Button width={28} colorScheme="gray" onClick={capture}>
            一键声明
          </Button>
        </Flex>
        <Hero title="呐喊的力量" />
        <Flex marginTop={-24}>
          <iframe
            width="720"
            height="405"
            frameBorder="0"
            src="https://www.ixigua.com/iframe/6580983790653407747?autoplay=0"
            referrerPolicy="unsafe-url"
            allowFullScreen
          ></iframe>
        </Flex>
      </Main>

      <NavBar />
      <Footer>{/* <PoweredByVercel /> */}</Footer>
    </Container>
  );
};

export default Index;
