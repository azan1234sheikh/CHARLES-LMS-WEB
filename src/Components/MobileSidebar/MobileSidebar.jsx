import { Image, Text, Flex, Box, Container, Stack } from "@chakra-ui/react";
import React from "react";
import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

const MobileSidebar = () => {
    const Navigate = useNavigate();
    const handlebtn=()=>{
       Navigate("/Explorecourse");
    }
    const Overiviewbtn=()=>{
      Navigate("/Dashboard");
   }
    const Msgbtn=()=>{
      Navigate("/Message");
   }
    const handleCoursebtn=()=>{
      Navigate("/MyCourse");
   }
   const CreateCoursebtn=()=>{
    Navigate("/CreateCourse");
  }
  const CreateMentorbtn=()=>{
    Navigate("/WebMentor");
  }
  const CreateSettingsbtn=()=>{
    Navigate("/Settings");
  }
  return (
     <>
     <Flex display={{base:"block", lg:"none"}} w={"100%"} h={"70px"} bg={"white"} flexDirection={"row"}>
      <Box
        menuItemStyles={{
          button: {
            padding: "0px 0px 10px 0px",
            gap: "0px",
             
            fontWeight: 400,
            fontSize: "14px",
            borderRadius: "10px",
            [`&:hover, &.ps-active`]: { color: "#1f1f28", backgroundColor: "#f5f5f7 !important" },
          },
        }}
        
        as={Menu}
        pl="0px"
       
      
        w={"auto"}
      >
        <Flex flexDirection={"row"}>
        
        <MenuItem   onClick={Overiviewbtn} icon={<Image src="/element-4.png" alt="Grid" h="14px" w="18px" mr={"-32px"} /> } >
        </MenuItem>
        <Stack  flexDirection={"column"}>
            <Text  w={"46px"} position={"relative"} right={"33px"} mt={"42px"} fontSize={"10px"}>
                Overview
            </Text>
        </Stack>
        
        <MenuItem icon={<Image src="/book.png" alt="User" h="14px" w="18px" />}label="Courses" >
        
        </MenuItem>
        <Stack   flexDirection={"column"}>
            <Text w={"-46px"}  onClick={handlebtn} position={"relative"} right={"53px"} mt={"42px"} fontSize={"10px"}>
                Courses
            </Text>
        </Stack>
        <MenuItem  onClick={CreateMentorbtn} icon={<Image src="/user-octagon.png" alt="Lock" h="18px" w="18px" mr={'32px'} />}>
        
        </MenuItem>
        <Stack  flexDirection={"column"}>
            <Text  position={"relative"} right={"63px"} mt={"42px"} fontSize={"10px"}>
                Mentors
            </Text>
        </Stack>
        <MenuItem onClick={Msgbtn} icon={<Image src="/message.svg" alt="User" h="18px" w="18px" mr={'62px'} />}>  
        </MenuItem>
        <Stack  flexDirection={"column"}>
            <Text  position={"relative"} right={"83px"} mt={"42px"} fontSize={"10px"}>
                Message
            </Text>
        </Stack>
        <Box right={"32px"} position={"relative"}>
        <MenuItem onClick={CreateSettingsbtn} icon={<Image src="/setting-4.png" alt="Television" h="18px" w="18px" mr={'32px'} />}></MenuItem>
        </Box>
        <Stack  flexDirection={"column"}>
            <Text  position={"relative"} right={"103px"} mt={"42px"} fontSize={"10px"}>
                Settings
            </Text>
        </Stack>
        </Flex>
      </Box>
      </Flex>
     </>
  )
}

export default MobileSidebar