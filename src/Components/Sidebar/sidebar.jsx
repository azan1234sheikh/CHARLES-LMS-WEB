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
      <Image src="https://s3-alpha-sig.figma.com/img/cbcf/da20/26308dca38ec3691d4bba88980c68554?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=doNGQPoCG3xJW1HqcGDC-O5ieQDv0yxvEscu2wFXyrLC2OntT1DKKbllwo4Jn~UCiFTxSPItnhax8~6qMq66VnFATMck5pOlWxgZSAuk-hz5p8xwI76LY~Yt42o2cfRy8yjIGGjdNnKKbZlT52XAv2gpd9EiNb2kObSQx5y0Ng6yEJTrgTSz~evTUf1xlddbq8QX8Ruba0M9FLi31O0iutzD5vBQyUbPJLcYmn9flQAWDe~5cdJcSnZZG91k3Q3DCKfrrpaKC4JVPAobZogCCVZePF~ZMuIFy8Bn-rxmhZWGNQPjmIFmct1b0DaVpSRh3Oj7P5dxJMoqn7gqPQtJ-A__" alt="Sidebarlogo" h="42px" w="122px" fit="contain" />
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
        <MenuItem onClick={Overiviewbtn} icon={<Image src="./public/element-4.png" alt="Grid" h="18px" w="18px" />}>Overview</MenuItem>
        <SubMenu
          icon={<Image src="./public/book.png" alt="User" h="18px" w="18px" />}
          label="Courses"
        >
          <MenuItem onClick={handlebtn} >Explore Courses</MenuItem>
          <MenuItem onClick={handleCoursebtn} >My Courses</MenuItem>
          <MenuItem onClick={CreateCoursebtn} >Create Courses</MenuItem>
        </SubMenu>
        <MenuItem onClick={CreateMentorbtn} icon={<Image src="./public/user-octagon.png" alt="Lock" h="18px" w="18px" />}>
          Mentors
        </MenuItem>
        <MenuItem onClick={Msgbtn} icon={<Image src="./public/message.svg" alt="User" h="18px" w="18px" />}>
          Message
        </MenuItem>
        <MenuItem onClick={CreateSettingsbtn} icon={<Image src="./public/setting-4.png" alt="Television" h="18px" w="18px" />}>Setting</MenuItem>
      </Box>
    </Box>
   
    </>
  );
}

