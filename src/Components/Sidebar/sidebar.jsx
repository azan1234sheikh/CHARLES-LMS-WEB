import { Image, Text, Flex, Box, Container } from "@chakra-ui/react";
import React from "react";
import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";



export default function Sidebar8({ ...props }) {
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
    <Box 
      
      {...props}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 50 } }}
      as={Sidebar}
      pt={{ base: "20px", sm: "30px" }}
      display={{ base: "none", md: "block" }}

      gap="50px"
       
      flexDirection={{base:"row",lg:"column"}}
       bgColor=" #ffffff;"
      h="100vh"
      top="0px"
      overflow="auto"
      px="12px"
      sx={{ position: "sticky !important" }}
    >
      <Image src="/Logo.svg" alt="Sidebarlogo" h="42px" w="122px" fit="contain" />
      <Box
        menuItemStyles={{
          button: {
            padding: "14px 14px 14px 18px",
            gap: "20px",
           
            fontWeight: 400,
            fontSize: "14px",
            borderRadius: "10px",
            [`&:hover, &.ps-active`]: { color: "#141522", backgroundColor: "#f5f5f7 !important" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "20px" } }}
        as={Menu}
        pl="6px"
        display="flex"
        alignSelf="stretch"
        flexDirection={{base:"",lg:"column"}}
        w="100%"
      >
        <MenuItem onClick={Overiviewbtn} icon={<Image src="/element-4.png" alt="Grid" h="18px" w="18px" />}>Overview</MenuItem>
        <SubMenu
          icon={<Image src="/book.png" alt="User" h="18px" w="18px" />}
          label="Courses"
        >
          <MenuItem onClick={handlebtn} >Explore Courses</MenuItem>
          <MenuItem onClick={handleCoursebtn} >My Courses</MenuItem>
          <MenuItem onClick={CreateCoursebtn} >Create Courses</MenuItem>
        </SubMenu>
        <MenuItem onClick={CreateMentorbtn} icon={<Image src="/user-octagon.png" alt="Lock" h="18px" w="18px" />}>
          Mentors
        </MenuItem>
        <MenuItem onClick={Msgbtn} icon={<Image src="/message.svg" alt="User" h="18px" w="18px" />}>
          Message
        </MenuItem>
        <MenuItem onClick={CreateSettingsbtn} icon={<Image src="/setting-4.png" alt="Television" h="18px" w="18px" />}>Setting</MenuItem>
      </Box>
    </Box>
   
    </>
  );
}

