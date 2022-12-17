import "./Section4.css";
import { Box, SimpleGrid, Heading, Text, Button } from "@chakra-ui/react";
export default function Section4() {
  return (
    <>
      <Box
        maxW="7xl"
        mx={"auto"}
        pt={3}
        px={{ base: 2, sm: 12, md: 17 }}
        mt={"5"}
      >
        <SimpleGrid columns={2} spacing={5} className="section4images">
          <Box className="img1">
            <Heading pt={20} ml={"10"}>
              National Parks
            </Heading>
            <Text ml={"10"}>There's plenty to keep you busy.</Text>
            <Button
              ml={"10"}
              fontWeight={"bold"}
              color={"teal"}
              bg={"white"}
              size="sm"
              mt={3}
              borderRadius={"0"}
            >
              Learn more
            </Button>
          </Box>
          <Box className="img2">
            <Heading ml={"10"} pt={20}>
              The perfect road trip
            </Heading>
            <Text ml={"10"}>Find an adventure for every season</Text>
            <Button
              ml={"10"}
              fontWeight={"bold"}
              color={"teal"}
              bg={"white"}
              size="sm"
              mt={3}
              borderRadius={"0"}
            >
              Read on
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
