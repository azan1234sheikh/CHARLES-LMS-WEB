import Header from "../../Components/DashboardHeader/Header";
import Sidebar8 from "../../Components/Sidebar/sidebar";
import UserProfile from "../../Components/UserMsgProfile/UserProfile";
import WebmessageTab from "./WebmessageTab";
import { IoCloseSharp } from "react-icons/io5";
import { Stack,Image, InputRightElement, InputGroup, Input, Text, Flex, Box, Heading } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'

const data = [
  { userName: "Emerson Levin", lastActive: "2 m Ago", userStatus: "Unresolved : And the easiest of these things is..." },
  { userName: "Jakob Calzoni", lastActive: "2 m Ago", userStatus: "Unresolved : And the easiest of these   things is...Unresolved" },
  { userName: "Emery Korsgaard", lastActive: "2 m Ago", userStatus: "Unresolved : Sure! let me tell   you about wh…" },
  { userName: "Randy Vetrovs", lastActive: "2 m Ago", userStatus: "Unresolved : Sure! let me tell   you about wh…" },
  { userName: "Hanna Septimus", lastActive: "2 m Ago", userStatus: "You : Sure! let  me tell you about w…" },
  { userName: "Jakob Saris", lastActive: "2 m Ago", userStatus: "You : Sure! let me tell  you about w…" },
  { userName: "Martin Herwitz", lastActive: "2 m Ago", userStatus: "You : Sure! let me tell you about w…" },
  { userName: "Jordyn Dorwart", lastActive: "2 m Ago", userStatus: "You : Sure! let me tell you about w…" },
  { userName: "Emerson Levin", lastActive: "2 m Ago", userStatus: "Unresolved : And the easiest of these things is..." },
];

 

export default function WebmessagePage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  const unreadMessages = data.filter(user => !user.userStatus.startsWith("You :"));

  return (
    <>
      <Box bg="neutral.light_grey" w="100%">
        <Flex  alignItems="start">
          <Sidebar8 />
          <Box alignSelf="center" flex={1}>
            <Box h="98px">
            <Header  />
            </Box>
            <Stack >
              <Box h="1px" w="1264px" bg="rgba(245, 245, 247, 1)"></Box>
              </Stack>
            <Flex mb="2px" alignItems="start" flexDirection={{ md: "row", base: "column" }}>
              <Box  alignSelf="center" w={{ md: "30%", base: "100%" }} px={{ md: 0, base: "20px" }}>
                <Flex justifyContent="center" alignItems="start">
                  <Box flex={1}>
                    <Box>
                      <Box bg="neutral.white">
                        <InputGroup mt="18px">
                          <Input
                            colorScheme="undefined_undefined"
                            placeholder={`Search name/chat`}
                            value={searchBarValue2}
                            onChange={(e) => setSearchBarValue2(e.target.value) 
                              
                            }
                            
                            color="neutral.dark_grey"
                            gap="16px"
                            borderRadius="10px"
                          />
                          <InputRightElement>
                            {searchBarValue2?.length > 0 ? (
                              <IoCloseSharp  onClick={() => setSearchBarValue2("")} />
                            ) : (
                              <Image src="./Search.svg" alt="Contrast" h="18px" w="18px" />
                            )}
                          </InputRightElement>
                        </InputGroup>
                      </Box>
                      <Box
                        borderColor="neutral.soft_grey"
                        borderBottomWidth="0.5px"
                        borderStyle="solid"
                        bg="neutral.white"
                        
                        px={{ base: "20px", sm: "30px" }}
                      >
                        <Flex mt="20px" alignItems="start">
                        <Tabs mt="12px" h="42px" border="transparent " position='relative' variant='unstyled'>
                       <TabList>
                       <Tab _hover={{border: '1px solid gray'}}>All</Tab>
                         <Tab>Unread</Tab>
                        <Tab>Unresolved</Tab>
                      </TabList>
                      <TabIndicator  mt='-1.5px' height='2px' bg='rgba(255, 187, 84, 1)' borderRadius='1px' />
                        <TabPanels>
                        <TabPanel>
                        <Flex  mb="1px" flexDirection="column">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((data, index) => (
                          <UserProfile
                            {...data}
                            key={"webmessage" + index}
                            borderColor="neutral.soft_grey"
                            borderBottomWidth="0.5px"
                            borderStyle="solid"
                            bg="neutral.light_grey"
                          />
                        ))}
                      </Suspense>
                        </Flex>
                       </TabPanel>   
                       <TabPanel>
                       <Flex  mb="1px" flexDirection="column">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data.filter(user => !user.userStatus.startsWith("You :")).map((user,index)=>( 
                          <UserProfile
                            {...data}
                            key={"webmessage" + index}
                            borderColor="neutral.soft_grey"
                            borderBottomWidth="0.5px"
                            borderStyle="solid"
                            bg="neutral.light_grey"
                          />
                        ))}
                      </Suspense>
                        </Flex>
                     </TabPanel>
                       <TabPanel>
                       <Flex  mb="1px" flexDirection="column">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data.filter(user => !user.userStatus.startsWith("Unresolved :")).map((user,index)=>( 
                          <UserProfile
                            {...data}
                            key={"webmessage" + index}
                            borderColor="neutral.soft_grey"
                            borderBottomWidth="0.5px"
                            borderStyle="solid"
                            bg="neutral.light_grey"
                          />
                        ))}
                      </Suspense>
                        </Flex>
                    </TabPanel>
                   </TabPanels>
                       </Tabs>
                        </Flex>
                      </Box>
                    </Box>
                    {/* <Flex flexDirection="column">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((data, index) => (
                          <UserProfile
                            {...data}
                            key={"webmessage" + index}
                            borderColor="neutral.soft_grey"
                            borderBottomWidth="0.5px"
                            borderStyle="solid"
                            bg="neutral.light_grey"
                          />
                        ))}
                      </Suspense>
                    </Flex> */}
                  </Box>
                  <Box h="1004px" mb="20px" alignSelf="center" bg="neutral.soft_grey" w="1px" />
                </Flex>
              </Box>
              <Flex
                gap="18px"
                flex={1}
                flexDirection="column"
                alignSelf={{ md: "auto", base: "stretch" }}
                px={{ md: 0, base: "20px" }}
              >
                <WebmessageTab />
                <Flex flexDirection="column" alignItems="end" mx={{ md: "18px", base: "0px" }}>
                  <Flex gap="10px" alignSelf="stretch" flexDirection="column" alignItems="end">
                    <Flex
                      borderTopLeftRadius="10px"
                      borderBottomLeftRadius="10px"
                      borderBottomRightRadius="10px"
                      bg="cyan.50"
                      boxShadow="xs"
                      w={{ md: "38%", base: "100%" }}
                      justifyContent="center"
                      p="8px"
                    >
                      <Text color="neutral.black.0" fontFamily="Manrope" fontWeight={500} w="96%" lineHeight="20px">
                        Morning emerson, I have question about the course
                      </Text>
                    </Flex>
                    <Text size="texts">Today 11:52</Text>
                  </Flex>
                  <Flex mt="20px" gap="10px" alignSelf="stretch" flexDirection="column" alignItems="start">
                    <Flex
                      borderTopRightRadius="10px"
                      borderBottomLeftRadius="10px"
                      borderBottomRightRadius="10px"
                      bg="neutral.white"
                      boxShadow="xs"
                      p="8px"
                    >
                      <Text color="fill.dark.main_dark" fontFamily="Manrope" fontWeight={500}>
                        Yes sure, Any problem to implement the course?
                      </Text>
                    </Flex>
                    <Text size="texts">Today 11:52</Text>
                  </Flex>
                  <Flex
                    mt="20px"
                    borderTopLeftRadius="10px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="10px"
                    gap="12px"
                    bg="cyan.50"
                    boxShadow="xs"
                    w={{ md: "56%", base: "100%" }}
                    flexDirection="column"
                    p="8px"
                  >
                    <Box h="246px" bg="blue_gray.100" borderRadius="5px" />
                    <Text color="neutral.black.0" fontFamily="Manrope" fontWeight={500} lineHeight="20px">
                      For in our free time, when we are free to choose, and nothing prevents us from doing what pleases
                      us most
                    </Text>
                  </Flex>
                  <Flex mt="40px" gap="10px" alignSelf="stretch" flexDirection="column" alignItems="end">
                    <Input
                      size="xs"
                      variant="fill"
                      placeholder={`or to bear other greater consequences`}
                      borderTopLeftRadius="10px"
                      borderBottomLeftRadius="10px"
                      borderBottomRightRadius="10px"
                      fontFamily="Manrope"
                      fontWeight={500}
                      w="38%"
                    />
                    <Text size="texts">Today 11:55</Text>
                  </Flex>
                </Flex>
                <Box>
                  <Flex gap="10px" flexDirection="column" alignItems="start" mx={{ md: "18px", base: "0px" }}>
                    <Flex
                      borderTopRightRadius="10px"
                      borderBottomLeftRadius="10px"
                      borderBottomRightRadius="10px"
                      bg="neutral.white"
                      boxShadow="xs"
                      w={{ md: "66%", base: "100%" }}
                      justifyContent="center"
                      p="8px"
                    >
                      <Text color="fill.dark.main_dark" fontFamily="Manrope" fontWeight={500} w="98%" lineHeight="20px">
                        And indeed the distinction between these things is easy and expedient. For in our free time,
                        when we are free to choose, and nothing prevents us from doing what pleases us most, every
                        pleasure must be assumed.
                      </Text>
                    </Flex>
                    <Text size="texts">Today 12:00</Text>
                  </Flex>
                  <InputGroup mt="-14px" size="md" variant="fill">
                    <Input
                      placeholder={`Send your message…`}
                      gap="16px"
                      borderColor="neutral.soft_grey"
                      borderTopWidth="0.5px"
                    />
                    <InputRightElement>
                      <Image src="images/img_settings_neutral_dark_grey_24x24.svg" alt="Settings" h="24px" w="24px" />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
