import { Flex, Heading ,Box,Text ,Image} from '@chakra-ui/react'
import React from 'react'

const Overview = ({
    CourseHeading = "Total Course",
    Count = "2",
    Description = "Total Course",
    bgImage="url(./fi-rr-e-learning.png)",
    bg="rgba(225, 215, 250, 1)",
    ...props
}) => {
  return (
     <>
      <Flex {...props} gap="8px" flexDirection={"column"} alignItems="start">
       <Heading   ml={{base:"-8px", lg:"10px"}} fontFamily="700" fontSize="16px" lineHeight="25px" >
       {CourseHeading}
       </Heading>
       <Box alignSelf="stretch">
        <Flex gap="16px" flexDirection={"column"}>
          <Box  position="relative" left={{base:"-6px",lg:"13px"}} w={{base:"50px",lg:"200px"}} h="1px" bg="rgba(235, 235, 235, 1)" borderRadius="1px" />
          <Flex justifyContent="space-between" gap="20px">
            <Flex gap="2px" flexDirection={"column"} alignItems="start" justifyContent="center">
              <Heading fontSize="24px" ml="12px" fontWeight="700" lineHeight="32px" color="rgba(23, 23, 23, 1)">
                {Count}
              </Heading>
              <Text  fontSize={{base:"10px",lg:"14px"}} color="rgba(35, 35, 35, 1)">
                {Description}
              </Text>
            </Flex>
            <Flex mr="39px"  h={{base:"22px", lg:"56px"}} bg={bg} w={{base:"10%",lg:"25%"}} justifyContent="center" p="16px" borderRadius="35px">
              <Box h={{base:"10px",lg:"20px"}} bgImage={bgImage} bgSize="cover" bgRepeat="no-repeat" w={{base:"50%",lg:"100%"}}>
              
              </Box>
            </Flex>
            
          </Flex>
        </Flex>
      </Box>
      </Flex>

    </>
  )
}

export default Overview