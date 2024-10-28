import { Button, Flex } from "@chakra-ui/react";
import React from "react";

export default function ButtonGroup({
  buttonOne = "1",
  buttonTwo = "2",
  buttonThree = "3",
  buttonFour = "4",
  buttonFive = "5",
  buttonSix = "6",
  buttonSeven = "7",
  ...props
}) {
  return (
    <Flex  {...props} gap={{base :"17px",md:"14px"}} flex={1} alignItems="center">
      <Button variant="outline" colorScheme="undefined_undefined" fontWeight={600} minW={{base:"30px",md:"40px"}}>
        {buttonOne}
      </Button>
      <Button variant="outline" colorScheme="undefined_undefined" fontWeight={600} minW={{base:"30px",md:"40px"}}>
        {buttonTwo}
      </Button>
      <Button variant="outline" colorScheme="undefined_undefined" fontWeight={600} minW={{base:"30px",md:"40px"}}>
        {buttonThree}
      </Button>
      <Button variant="outline" colorScheme="undefined_undefined" fontWeight={600} minW={{base:"30px",md:"40px"}}>
        {buttonFour}
      </Button>
      <Button variant="outline" colorScheme="undefined_undefined" fontWeight={600} minW={{base:"30px",md:"40px"}}>
        {buttonFive}
      </Button>
      <Button
        color="white"
        fontWeight={600}
        borderColor="gray.300"
        borderWidth="1.04px"
        borderStyle="solid"
        minW={{base:"30px",md:"40px"}}
      >
        {buttonSix}
      </Button>
      <Button
        color="white"
        fontWeight={600}
        borderColor="gray.300"
        borderWidth="1.04px"
        borderStyle="solid"
        
        minW={{base:"30px",md:"40px"}}
      >
        {buttonSeven}
      </Button>
    </Flex>
  );
}
