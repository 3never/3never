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
import {
  ArrowLeftIcon,
  ArrowRightIcon, CheckCircleIcon, LinkIcon
} from '@chakra-ui/icons';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { NavBar } from '../components/NavBar';
import { MyDate } from '../components/MyDate';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
const moment = require('moment');

import react, { useState } from 'react';

import { Provider, Carousel, LeftButton, RightButton } from "@threenever/chakra-ui-carousel";

import Head from 'next/head';

const Index = () => {
  const toast = useToast();
  const date = moment().format('YYYY年MM月DD日');
  const [署名, set署名] = useState('');
  const [current, setCurrent] = useState(0);
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

    var myImage = new Image();
    myImage.src = `/template${current}.svg`; //背景图片 你自己本地的图片或者在线图片
    myImage.crossOrigin = 'Anonymous';
    myImage.onload = function () {
      let canvas1 = document.createElement('canvas');
      canvas1.width = 540;
      canvas1.height = 960;
      let context1 = canvas1.getContext('2d');
      context1.rect(0, 0, canvas1.width, canvas1.height);
      context1.fillStyle = '#939498';
      context1.fill();
      context1.font = '20px Outfit';
      context1.drawImage(myImage, 0, 0, 540, 960);
      context1.fillText(署名, 320, 560);
      context1.fillText(date, 320, 590);
      const dataImg = new Image();
      dataImg.src = canvas1.toDataURL('image/png');
      const alink = document.createElement('a');
      alink.href = dataImg.src;
      alink.download = `声明${current}.png`;
      alink.click();
    };
  };
  return (
    <Container>
      <Head>
        <title>3NEVER</title>
      </Head>
      <Hero />
      <Main>
        <Box style={{ textIndent: 60 }}>
          <Provider current={setCurrent}>
            <Carousel gap={0} full={true}>
              <Text color="text" fontSize="3xl" as="b">
                本人
                <Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
                  从未
                </Code>
                参与过任何居委会或村委会主任、副主任、委员的选举，
                <Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
                  从未
                </Code>
                参与过基层人大代表的选举，
                <Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
                  从未
                </Code>
                向任何级别人大代表反映过意见和要求。
              </Text>

              <Text color="text" fontSize="3xl" as="b">
                本人
                <Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
                  从未
                </Code>
                认真参与过任何居委会或村委会主任、副主任、委员的选举，
                <Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
                  从未
                </Code>
                认真参与过基层人大代表的选举，
                <Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
                  从未
                </Code>
                向任何级别人大代表反映过意见和要求。
              </Text>
              <Text style={{ lineBreak: "anywhere" }} color="text" fontSize="3xl" as="b">
                本人曾加入中国少年先锋队和中国共产主义青年团，如今对于当初的加入感到十分<Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
                  遗憾
                </Code>和<Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
                  后悔
                </Code>，如果可以再做一次选择的话，本人<Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
                  不会
                </Code>加入上述两个组织。
              </Text>
              <Text color="text" fontSize="3xl" as="b">
                本人之前<Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
                  没有
                </Code>加入过中国共产党，之后也<Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
                  不会
                </Code>加入。如若有变，绝非<Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
                  自愿
                </Code>。
              </Text>
              <Text color="text" fontSize="3xl" as="b">
                本人眼中的<Code fontSize="3xl" as="mark" style={{ textIndent: 0 }}>
                  皇帝
                </Code>确实是裸体，一丝不挂，没穿衣裳。

              </Text>
            </Carousel>
            <Flex justifyContent="center" marginTop={8}>
              <LeftButton />
              <RightButton />
            </Flex>

          </Provider>

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
