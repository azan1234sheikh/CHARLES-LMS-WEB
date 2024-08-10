import { Flex, Heading ,Box,Text ,Image} from '@chakra-ui/react'
import React from 'react'

const Overview = ({
    CourseHeading = "Total Course",
    Count = "2",
    Description = "Total Course",
    ...props
}) => {
  return (
     <>
      <Flex {...props} gap="8px" flexDirection="column" alignItems="start">
       <Heading ml="12px" fontFamily="700" fontSize="16px" lineHeight="24px" >
       {CourseHeading}
       </Heading>
       <Box alignSelf="stretch">
        <Flex gap="16px" flexDirection="column">
          <Box  position="relative" left="13px" w="200px" h="1px" bg="rgba(235, 235, 235, 1)" borderRadius="1px" />
          <Flex justifyContent="space-between" gap="20px">
            <Flex gap="2px" flexDirection="column" alignItems="start" justifyContent="center">
              <Heading fontSize="24px" ml="12px" fontWeight="700" lineHeight="32px" color="rgba(23, 23, 23, 1)">
                {Count}
              </Heading>
              <Text size="14px" color="rgba(35, 35, 35, 1)">
                {Description}
              </Text>
            </Flex>
            <Flex mr="39px"  h="56px" bg="rgba(252, 217, 196, 1)" w="25%" justifyContent="center" p="16px" borderRadius="35px">
              <Box h="20px" bgImage="url(./public/fi-rr-e-learning.png)" bgSize="cover" bgRepeat="no-repeat" w="100%">
              
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