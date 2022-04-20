import { Box, Flex, Grid, Image, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Banner = ({ image, isPadding }) => {
  const [isSmallerThan767] = useMediaQuery('(max-width: 767px)');
  if (isSmallerThan767) return (
    <Grid gridAutoFlow="column" gridAutoColumns="80%" overflowX="auto" py={isPadding && "2rem"} gap="2rem" className='hide-scroll' style={{
      scrollSnapType: 'x mandatory'
    }}>
      {image && image.map((item, idx) => (
        <Box key={`image-${idx}`} flex="1" style={{
          scrollSnapStop: 'always',
          scrollSnapAlign: "start"
        }}>
          <Image src={item} alt={`Banner - ${idx}`} h="100%" />
        </Box>
      ))
      }
    </Grid>
  )

  return (
    <Flex align="stretch" justify="start" py={isPadding && "2rem"} gap="2rem">
      {image && image.map((item, idx) => (
        <Box key={`image-${idx}`} flex="1">
          <Image src={item} alt={`Banner - ${idx}`} h="100%" />
        </Box>
      ))
      }
    </Flex>
  )
}

export default Banner