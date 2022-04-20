import { Box, Flex, Text, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const MOCK_DATA = {
  title: 'Diem nhan phong cach nam nay',
  subTitle: 'xu huong cong nghe hien dai'
}

const Content = () => {
  const { title, subTitle } = MOCK_DATA;
  const [isSmallerThan1279] = useMediaQuery('(max-width: 1279px)')
  const [isSmallerThan1023] = useMediaQuery('(max-width: 1023px)');
  const [isSmallerThan767] = useMediaQuery('(max-width: 767px)');

  const handleTitleSize = () => {
    if (isSmallerThan1279 && !isSmallerThan1023) return "5.5rem"
    if (isSmallerThan1023 && !isSmallerThan767) return "4rem"
    if (isSmallerThan767) return "3rem"

    return "6rem"
  }
  const handleSubTitleSize = () => {
    if (isSmallerThan1023 && !isSmallerThan767) return "2rem"
    if (isSmallerThan767) return "1.75rem"

    return "2.5rem"
  }

  const handleDescriptionSize = () => {
    if (isSmallerThan1023 && !isSmallerThan767) return "2.5rem"
    if (isSmallerThan767) return "2rem"

    return "3rem"
  }


  return (
    <Box py="5rem" px={isSmallerThan767 ? "2rem" : 0}>
      <Flex direction="column" justify="center" align="center" mb="4rem" gap="2rem" >
        <Text as="h1" fontSize={handleTitleSize()} fontWeight="500" fontStyle="italic">{title}</Text>
        <Text as="h2" fontSize={handleSubTitleSize()} casing="uppercase" fontStyle="italic" style={{ letterSpacing: '0.5rem' }}>{subTitle}</Text>
      </Flex>
      <Flex direction="column" gap="4rem" fontSize={handleDescriptionSize()} maxW={isSmallerThan767 ? "100%" : "84%"} margin={isSmallerThan767 ? 0 : "0 auto"}>
        <Text as="p">
          Cua hang cua
          <Text as="span" fontWeight="600" mx="0.5rem">
            <Text as="span" style={{ letterSpacing: '0.15rem' }}>Top</Text>
            <Text as="span" color="red" mx="0.15rem">Z</Text>
            <Text as="span" color="green" mx="0.15rem">o</Text>
            <Text as="span" color="aqua" mx="0.15rem">n</Text>
            <Text as="span" color="pink" mx="0.15rem">e</Text>
          </Text>
          duoc van hanh 100% dung chuan cao nhat cua Apple, The Gioi Di Dong cung danh uu tien chat luong dich vu hang dau cho chuoi cua hang nay bao gom ca viec dat nhung tieu chuan cao cho doi ngu nhan vien, dap ung du ky nang can thiet
        </Text>
        <Text as="p">
          Voi
          <Text as="span" fontWeight="600" mx="0.5rem">
            <Text as="span" style={{ letterSpacing: '0.15rem' }}>Top</Text>
            <Text as="span" color="red" mx="0.15rem">Z</Text>
            <Text as="span" color="green" mx="0.15rem">o</Text>
            <Text as="span" color="aqua" mx="0.15rem">n</Text>
            <Text as="span" color="pink" mx="0.15rem">e</Text>
          </Text>
          , uoc mo nguoi viet duoc mua sam tai cac cua hang chuan Apple thuc thu ngay tai Viet Name cua ban se tro thanh su that
        </Text>
        <Text as="p">
          Ban co hao hung trai nghiem mua sam tai TopZone trong thoi gian sap toi khong ?
        </Text>
      </Flex>
    </Box>
  )
}

export default Content