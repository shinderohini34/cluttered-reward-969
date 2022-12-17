import "./Section5.css";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Stack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
} from "@chakra-ui/react";

export default function Section5() {
  return (
    <>
      <Box maxW="7xl" mx={"auto"} pt={10} px={{ base: 2, sm: 12, md: 17 }}>
        <Stack direction={"row"} spacing={5}>
          <Box>
            <img
              src="https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg"
              alt=""
              className="im"
            />
          </Box>
          <Box>
              <Heading fontSize={"xl"}>
                Rewards are waiting for you in the Orbitz app
              </Heading>
              <ul>
                <li>Earn 4% back when you book your hotel in app, vs. 3% on site</li>
                <li>Get flight status and gate number notifications</li>
                <li>Have questions about your stay? Message your hotel right in the app</li>
              </ul>
              
              <Text fontWeight={"bold"}>Text yourself a download link</Text>
              <Stack direction={"row"}>
                <Select variant="filled" placeholder="Outline">
                  <option value="">Helo</option>
                  <option value="">Helo</option>
                </Select>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input type="tel" placeholder="Phone number" />
                </InputGroup>
                <Button>Get the app</Button>
              </Stack>
            </Box>
          
          
        </Stack>
      </Box>
    </>
  );
}
