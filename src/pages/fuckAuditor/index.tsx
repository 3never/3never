import {
  Textarea, Text, Card, CardHeader, CardBody, CardFooter, Box, Flex, Image
} from '@chakra-ui/react';

import { Hero } from '../../components/Hero';
import { Container } from '../../components/Container';
import { Main } from '../../components/Main';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';

import Head from 'next/head';
import react, { useState } from 'react';

const Index = () => {
  const [list, setList] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const onChange = (e) => {
    let dataList = []
    for (let char of e.target.value) {
      let unicode = encodeURIComponent(char)
      if (unicode == '%0A') {
        dataList.push({ content: char, 换行: true })
      } else {
        dataList.push({ content: char, 换行: false })
      }
      console.log(unicode)
    }
    setList(dataList)
    setIsShow(dataList.length > 0)
  }

  return (
    <Container minHeight="100vh">
      <Head>
        <title>3NEVER</title>
      </Head>
      <Hero size='3xl' title='累死那个🐶日的审核员' />

      <Main>
        <Textarea zIndex={0} height="50vh" size="lg" onChange={onChange} placeholder='你输入每一个字，都可能是压垮那个审核员的最后一根稻草' />
        {
          isShow ? (<Card>
            <CardBody display="flex" flexWrap="wrap">

              {list.map((item, index) => (
                <Text height='12px' minWidth='4px' key={index} style={{ transform: 'rotateZ(30deg)', width: item.换行 ? '100%' : 'auto' }}>
                  {item.content}
                </Text>

              ))}
            </CardBody>
          </Card>) : null
        }

      </Main>

      <NavBar />
      <Footer id='footer'>🕯️
      </Footer>
    </Container>
  );
};


export default Index;
