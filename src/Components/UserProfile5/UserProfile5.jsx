import { Text, Image, Flex, Box, Heading, Button ,extendTheme ,Progress} from "@chakra-ui/react";
import React, { useState } from "react";
const UserProfile5 = (
    {
         isVisible, toggleVisibility ,
         beginnerButton = "Beginner",
         courseTitle = "Creating Beautifull Landing Page in 1 Hour",
         mentorName = "Lincoln George",
         reviewText = "4.5",
         barvalue = "30",
         display = "block",
         barcolour = 'rgba(255, 187, 84, 1)',
         onClick,
         ...props
       }
       
) => {
   
    return isVisible ?(
       
        <Flex
        
        {...props}
        onClick={onClick}
        gap={{base:"12px",lg:"20px"}}
        bg="white"
        w={{base:"180px",md:"348px"}}
        h={{base:"195px",lg:"100%"}}
         _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }} // Hover effect
        transition="all 0.2s ease"
        flexDirection="column"
        p={{ base: "20px", sm: "30px" }}
        borderRadius="16px"
      >
        <Flex w={{base:"100%",lg:"294px"}} h={{base:"75px",lg:"150px"}} bg="rgba(226, 226, 226, 0.674)" alignSelf="stretch" p="10px" borderRadius="10px">
          <Button
            size="sm"
            rightIcon={<Image src="./img_settings_neutral_soft_grey.svg" alt="Settings" w="12px" h="12px" />}
            mt={{base:"30px",lg:"100px"}}
            fontFamily="Plus Jakarta Sans"
            gap="6px"
            minW={{base:"20px",lg:"90px"}}
            borderRadius="8px"
          >
            {beginnerButton}
          </Button>
        </Flex>
        <Flex mb="38px" gap="10px" alignSelf="stretch" flexDirection="column">
          <Heading size={{base:"headings",lg:"heading3xl"}} as="h6" color="neutral.black.0" fontFamily="Plus Jakarta Sans" lineHeight="150%">
            {courseTitle}
          </Heading>
            
               <Progress display={display} borderRadius="12px" sx={{'& > div': { bg:barcolour}}}size='sm' value={barvalue} />
            
          <Flex alignItems="center">
            <Flex gap="10px" flex={1} alignItems="center">
              <Box h={{base:"17px",lg:"40px"}} bg="gray" w={{base:"17px",lg:"40px"}} borderRadius={{base:"15px",lg:"19px"}} />
              <Text alignSelf="end">{mentorName}</Text>
            </Flex>
            <Flex gap="4px" w="32%" justifyContent="center">
              <Flex flex={1} flexDirection="column" alignItems="end">
                <Image src="./star.svg" alt="Lincoln George" h="14px" w="14px" />
              </Flex>
              <Text color="neutral.black.0" alignSelf="end">
                {reviewText}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
       ) : null;
}

export default UserProfile5