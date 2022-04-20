import {
  Box,
  ChakraProvider, useColorMode
} from '@chakra-ui/react';
import Banner1 from 'assets/img/banner-1.jpg';
import Banner2 from 'assets/img/banner-2.jpg';
import Portfolio1 from 'assets/img/portfolio-1.jpg';
import Portfolio2 from 'assets/img/portfolio-2.jpg';
import Portfolio3 from 'assets/img/portfolio-3.jpg';
import theme from 'assets/theme';
import { Banner, Header, Info, Content, Footer, ColorModeSwitcher } from 'components';
import React from 'react';

const MOCK_DATA = {
  banner: [Banner1, Banner2],
  portfolio: [Portfolio1, Portfolio2, Portfolio3]
}

function App() {
  const { banner, portfolio } = MOCK_DATA
  const { toggleColorMode } = useColorMode();

  return (
    <Box className="wrapper">
      <Box position="fixed" right="2rem" top="2rem">
        <ColorModeSwitcher handlecolormode={toggleColorMode} />
      </Box>
      <div className="container">
        <Header />

        {banner && banner.length > 0 && (<Banner image={banner} isPadding="true" />)}

        <Info />

        {portfolio && portfolio.length > 0 && (<Banner image={portfolio} isPadding="true" />)}

        <Content />

        <Footer />
      </div>
    </Box>
  );
}

export default App;
