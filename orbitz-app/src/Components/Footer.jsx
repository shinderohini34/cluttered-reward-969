import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2} color={"black"}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("teal", "gray.200")}
    >
      <Container as={Stack} maxW={"7xl"} py={10} fontSize={14}>
        <img
          height={0}
          width={160}
          src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
          alt=""
        />

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Jobs</Link>
            <Link href={"#"}>List your property</Link>
            <Link href={"#"}>partnerships</Link>
            <Link href={"#"}>Newsroom</Link>
            <Link href={"#"}>Investor Relations</Link>
            <Link href={"#"}>Site Map</Link>
            <Link href={"#"}>Travelsphere Rewards</Link>
            <Link href={"#"}>Advertising</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Explore</ListHeader>
            <Link href={"#"}>Hotels in United States</Link>
            <Link href={"#"}>Vacation Rentals in United States</Link>
            <Link href={"#"}>Car Rentals in United States</Link>
            <Link href={"#"}>Domestic Flights</Link>
            <Link href={"#"}>Vacation Packages in United States</Link>
            <Link href={"#"}>Orbitz Reviews</Link>
            <Link href={"#"}>Orbitz Coupons</Link>
            <Link href={"#"}>LGBTQ Travel</Link>
            <Link href={"#"}>Unique Accommodations</Link>
            <Link href={"#"}>Travel Blog</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Policies</ListHeader>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Use</Link>
            <Link href={"#"}>Vrbo terms and conditions</Link>
            <Link href={"#"}>Travelsphere Rewards Terms</Link>
            <Link href={"#"}>Your Privacy Choices</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Help</ListHeader>
            <Link href={"#"}>Support</Link>
            <Link href={"#"}>Cancel vacation rental booking</Link>
            <Link href={"#"}>Cancel your flight</Link>
            <Link href={"#"}>Refund policies & processes</Link>
            <Link href={"#"}>Use an Orbitz Coupon</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={1}>
        <hr />
        <Text pt={6} fontSize={"sm"} color={"black"}>
          © 2022 Orbitz, LLC, an Expedia Group Company. All rights reserved.
        </Text>
        <Text pt={1} fontSize={"sm"} color={"black"}>
          Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered
          trademarks of Orbitz, LLC. CST# 2083930-50.
        </Text>
      </Box>
    </Box>
  );
}
