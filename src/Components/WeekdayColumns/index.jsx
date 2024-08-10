import { Heading, Flex } from "@chakra-ui/react";
import React from "react";

export default function WeekdayColumns({
  mondayText = "Mon",
  tuesdayText = "Tue",
  wednesdayText = "Wed",
  thursdayText = "Thurs",
  fridayText = "Fri",
  saturdayText = "Sat",
  sundayText = "sun",
  ...props
}) {
  return (
    <Flex {...props} justifyContent="center" alignItems="center">
      <Flex flexDirection="column" alignItems="center" px="14px" py="18px" >
        <Heading fontWeight="600" alignItems="center" fontSize="12px" lineHeight="14px">{mondayText}</Heading>
      </Flex>
      <Flex flex={1} flexDirection="column" alignItems="center" px="14px" py="18px">
        <Heading fontWeight="600" alignItems="center"fontSize="12px" lineHeight="14px">{tuesdayText}</Heading>
      </Flex>
      <Heading fontWeight="600" alignItems="center"fontSize="12px" lineHeight="14px">{wednesdayText}</Heading>
      <Heading fontWeight="600" alignItems="center"fontSize="12px" lineHeight="14px" ml="24px">
        {thursdayText}
      </Heading>
      <Flex flex={1} flexDirection="column" alignItems="end" p="18px">
        <Heading fontWeight="600" alignItems="center"fontSize="12px" lineHeight="14px">{fridayText}</Heading>
      </Flex>
      <Flex flexDirection="column" alignItems="center" px="14px" py="18px">
        <Heading fontWeight="600" alignItems="center"fontSize="12px" lineHeight="14px">{saturdayText}</Heading>
      </Flex>
      <Flex flexDirection="column" alignItems="center" px="14px" py="18px">
        <Heading fontWeight="600" alignItems="center"fontSize="12px" lineHeight="14px">{sundayText}</Heading>
      </Flex>
    </Flex>
  );
}
