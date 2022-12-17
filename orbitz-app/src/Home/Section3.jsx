import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"4"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={"gray"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 1 }}>
          <StatNumber fontSize={"lg"} fontWeight={"medium"}>
            {title}
          </StatNumber>
          <StatLabel fontWeight={"sm"} isTruncated>
            {stat}
          </StatLabel>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Section3() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={3} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 fontSize={"3xl"} py={5} fontWeight={"bold"}>
        Here to help keep you on the move
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Change or cancel a trip"}
          stat={"Make updates to your itinerary or cancel a booking"}
          icon={<BsPerson size={"1em"} />}
        />
        <StatsCard
          title={"Use a credit or coupon"}
          stat={"Apply a coupon code or credit to a new trip"}
          icon={<FiServer size={"1em"} />}
        />
        <StatsCard
          title={"Track your refund"}
          stat={"Check the status of a refund currently in progress"}
          icon={<GoLocation size={"1em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}
