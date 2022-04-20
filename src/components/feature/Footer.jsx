import { Box, Flex, Link, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { RiYoutubeLine } from 'react-icons/ri'

const MOCK_DATA = {
  title: 'contact us',
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
}

const Footer = () => {
  const { title, hashTag } = MOCK_DATA;
  const [isSmallerThan1023] = useMediaQuery('(max-width: 1023px)');
  const [isSmallerThan767] = useMediaQuery('(max-width: 767px)');

  return (
    <Box bg="black" py="3rem">
      <Flex direction="column" align="center" justify="center" color="white" gap="1rem">
        <Text as="h1" casing="uppercase" fontSize="2.5rem" fontStyle="italic" style={{ letterSpacing: "0.5rem" }}>{title}</Text>
        <Text as="h2" fontSize="2rem" fontWeight="600">
          {hashTag.map((item, idx) => (
            <Text key={`hashtag - ${idx}`} as="span" color={item.color} casing={item.casing ? item.casing : "lowercase"} style={{ letterSpacing: '0.5rem' }}>{item.text}</Text>
          ))}
        </Text>
      </Flex>
      {isSmallerThan767 ? (
        <Flex mt="2rem" gap="2rem" justify='center' fontSize="4rem" color='white'>
          <Link href="#" isExternal>
            <FiFacebook />
          </Link>
          <Link href="#" isExternal>
            <AiOutlineLinkedin />
          </Link>
          <Link href="#" isExternal>
            <RiYoutubeLine />
          </Link>
          <Link href="#" isExternal>
            <FiTwitter />
          </Link>
          <Link href="#" isExternal>
            <FiInstagram />
          </Link>
        </Flex>
      ) : (
        <Flex mt="2rem" gap={isSmallerThan1023 ? "4rem" : "8rem"} justify='center' fontSize={isSmallerThan1023 ? "5rem" : "10rem"} color='white'>
          <Link href="#" isExternal>
            <FiFacebook />
          </Link>
          <Link href="#" isExternal>
            <AiOutlineLinkedin />
          </Link>
          <Link href="#" isExternal>
            <RiYoutubeLine />
          </Link>
          <Link href="#" isExternal>
            <FiTwitter />
          </Link>
          <Link href="#" isExternal>
            <FiInstagram />
          </Link>
        </Flex>
      )}
    </Box>
  )
}

export default Footer