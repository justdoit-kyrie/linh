import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Logo from 'assets/img/logo-lg.png'
import { useMediaQuery } from '@chakra-ui/react'


const MOCK_DATA = {
  logo: Logo,
  text: 'chuoi cua hang cong nghe cao cap'
}

const Header = () => {
  const [isSmallerThan1279] = useMediaQuery('(max-width: 1279px)');
  const [isSmallerThan1023] = useMediaQuery('(max-width: 1023px)');
  const [isSmallerThan767] = useMediaQuery('(max-width: 767px)');

  if (isSmallerThan1023) return (
    <Box flex='1' bg='black' p='2rem' w='100%' minH={isSmallerThan767 ? '365px' : '465px'}>
      <Flex direction="column" align="center" justify='center' gap='5rem' maxW="100%" margin="0 auto" px="2rem">
        <Box boxSize='90%'>
          <Image src={MOCK_DATA.logo} alt='logo' />
        </Box>
        <Text color="white" fontSize={isSmallerThan767 ? '1.5rem' : '2.5rem'} casing="uppercase" align="center" style={{ letterSpacing: '1rem' }}>{MOCK_DATA.text}</Text>
      </Flex>
    </Box>
  )

  return (
    <Box flex='1' bg='black' p='2rem' w='100%' minH='465px'>
      <Flex direction="column" align="center" justify='center' gap='5rem' maxW={isSmallerThan1279 ? "100%" : "75%"} margin="0 auto">
        <Image src={MOCK_DATA.logo} alt='logo' />
        <Text color="white" fontSize='2.5rem' casing="uppercase" style={{ letterSpacing: '1rem' }}>{MOCK_DATA.text}</Text>
      </Flex>
    </Box>
  )
}

export default Header