import { Image, Text, Flex, Box, Container } from "@chakra-ui/react";
import React from "react";
import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";


export default function Sidebar8({ ...props }) {
  const Navigate = useNavigate();
  const handlebtn=()=>{
     Navigate("/Explorecourse");
  }
  const handleCoursebtn=()=>{
    Navigate("/MyCourse");
 }
 const CreateCoursebtn=()=>{
  Navigate("/CreateCourse");
}
  return (
    <>
    <Box 
      {...props}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 50 } }}
      as={Sidebar}
      pt={{ base: "20px", sm: "30px" }}
      gap="50px"
      display="flex"
      flexDirection="column"
       bgColor=" #ffffff;"
      h="100vh"
      top="0px"
      overflow="auto"
      px="12px"
      sx={{ position: "sticky !important" }}
    >
      <Image src="https://s3-alpha-sig.figma.com/img/cbcf/da20/26308dca38ec3691d4bba88980c68554?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gTeSuKZPzZLf~~tDiy0TaFPhhPLNl1QENDRUWPxgaByE4yD5ZNpprhnpD~Ixjxso1iV1ljmvLav0N0SUZlJMSo7RLXOsjeqIWGu~eBnh5OBSCY6F8ggtjl7GMzxiMnALHZbSiO0XlD9jnudnlpid8Jrrgbs6VU73Nk4vV354A6t5qcZCxfyuTYsDR1T81Q7jtphNvqXo3q-IWRGyGqEpyZOBGxnuAZE1EedxzIUeMaNYXfpn79hqokh0zu-8GJFzP7driuKRo19s0pkAUNp5bYak5a37Z77vO7boMYtEW0C1T2chJmcCtnWRGsCIteM57zIUYpEaTv9ycjoBxzUIzw__" alt="Sidebarlogo" h="42px" w="122px" fit="contain" />
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
        flexDirection="column"
        w="100%"
      >
        <MenuItem icon={<Image src="./public/element-4.png" alt="Grid" h="18px" w="18px" />}>Overview</MenuItem>
        <SubMenu
          icon={<Image src="./public/book.png" alt="User" h="18px" w="18px" />}
          label="Courses"
        >
          <MenuItem onClick={handlebtn} >Explore Courses</MenuItem>
          <MenuItem onClick={handleCoursebtn} >My Courses</MenuItem>
          <MenuItem onClick={CreateCoursebtn} >Create Courses</MenuItem>
        </SubMenu>
        <MenuItem icon={<Image src="./public/user-octagon.png" alt="Lock" h="18px" w="18px" />}>
          Mentors
        </MenuItem>
        <MenuItem icon={<Image src="./public/msg.svg" alt="User" h="18px" w="18px" />}>
          Message
        </MenuItem>
        <MenuItem icon={<Image src="./public/setting-4.png" alt="Television" h="18px" w="18px" />}>Setting</MenuItem>
      </Box>
    </Box>
   
    </>
  );
}
