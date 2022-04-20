import { Box, Center, Divider, Flex, Image, Spacer, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import logo from 'assets/img/logo-sm.png'
import { AiOutlineApple } from 'react-icons/ai'


const MOCK_DATA = {
  label: 'introduce',
  title: "Hien dai trong tap tay",
  description: "Mo hinh Mono Brand duoc phat trien boi the gioi di dong va su hop tac cao nhat cua Apple tai Viet Nam",
  logoText: [
    {
      text: 'top',
    },
    {
      text: 'z',
      color: 'red',
    },
    {
      text: 'o',
      color: 'green',
    },
    {
      text: 'n',
      color: 'aqua',
    },
    {
      text: 'e',
      color: 'pink',
    },
  ],
  hashTag: [
    {
      text: '#thisIsTop',
      color: 'white',
      casing: 'capitalize'
    },
    {
      text: 'z',
      color: 'red',
      casing: 'uppercase'
    },
    {
      text: 'o',
      color: 'green'
    },
    {
      text: 'n',
      color: 'aqua'
    },
    {
      text: 'e',
      color: 'pink'
    }
  ],
  logo: logo
}

const Info = () => {
  const [isLagerThan1024] = useMediaQuery('(min-width: 1024px)');
  const [isSmallerThan1023] = useMediaQuery('(max-width: 1023px)');
  const [isSmallerThan767] = useMediaQuery('(max-width: 767px)');
  const { label, title, hashTag, logoText, description, logo } = MOCK_DATA
  return (
    <Box>
      <Flex minH="670px" direction={isSmallerThan767 ? "column" : "row"}>
        <Box bg="black" flex="1" color="white" maxW={isSmallerThan767 ? "100%" : "340px"}>
          <Flex direction="column" justify="center" gap="3rem" h="100%" p="3rem">
            <Text as="h2" fontSize="3rem" casing="uppercase" maxW="90%">{title}</Text>
            <Text as="h2" fontSize="2rem">
              {hashTag.map((item, idx) => (
                <Text key={`hashTag - ${idx}`} as="span" color={item.color} casing={item.casing ? item.casing : "lowercase"} style={{ letterSpacing: '0.5rem' }}>{item.text}</Text>
              ))}
            </Text>
          </Flex>
        </Box>
        <Box flex="2" px="3rem" py={isSmallerThan767 ? "3rem" : 0}>
          <Flex direction="column" justify="center" align="center" h="100%" gap="2rem">
            <Text as="h2" fontSize="3rem" casing="uppercase" style={{ letterSpacing: '0.75rem' }}>{label}</Text>
            <Text as="h1" fontSize={isSmallerThan1023 ? "5rem" : "8rem"} style={{ letterSpacing: '1rem' }} fontWeight="500" fontStyle="italic">
              {logoText.map((item, idx) => (
                <Text key={`logoText - ${idx}`} as="span" color={item.color} casing="uppercase">{item.text}</Text>
              ))}
            </Text>
            <Text as="p" fontSize={isSmallerThan1023 ? "2.5rem" : "3.5rem"} fontWeight="500" align="center" maxW={isLagerThan1024 ? "83%" : "100%"}>{description}</Text>
          </Flex>
        </Box>
      </Flex>
      <Box bg="black" mt="1rem">
        <Flex gap="2rem" p="0.5rem">
          {isSmallerThan767 ? (
            <Center flex="1" maxW="50%">
              <Image src={logo} alt="logo" />
            </Center>
          ) : (
            <Image src={logo} alt="logo" />
          )}

          <Center height='92px'>
            <Divider orientation='vertical' colorScheme="gray.300" />
          </Center>

          <Flex direction="column" color="white" justify="center" align="center">
            <AiOutlineApple fontSize="5rem" />
            <Flex direction="column" justify="center" align="center">
              <Text as="span">premium</Text>
              <Text as="span">reseller</Text>
            </Flex>
          </Flex>
        </Flex>
        <Spacer />
      </Box>
    </Box >
  )
}

export default Info